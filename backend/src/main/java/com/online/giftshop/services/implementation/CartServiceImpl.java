package com.online.giftshop.services.implementation;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.online.giftshop.dto.CartDto;
import com.online.giftshop.dto.ItemDto;
import com.online.giftshop.entities.Cart;
import com.online.giftshop.entities.ProductInOrder;
import com.online.giftshop.entities.ProductInfo;
import com.online.giftshop.repositories.CartRepository;
import com.online.giftshop.repositories.ProductInOrderRepository;
//import com.online.giftshop.repositories.ProductInfo;
import com.online.giftshop.repositories.ProductInfoRepository;
import com.online.giftshop.repositories.UserDetailsRepository;
import com.online.giftshop.services.CartService;
import com.online.giftshop.services.ProductInOrderService;
import com.online.giftshop.exceptions.*;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	ProductInOrderRepository productInOrderRepository;

	@Autowired
	ProductInfoRepository productInfoRepo;

	@Autowired
	CartRepository cartRepo;

	@Autowired
	ProductInOrderService proOrder;

	@Autowired
	UserDetailsRepository userRepo;

	@Autowired
	private ProductInfoRepository productRepository;

	@Override
	public Cart fetchCartById(Long cartId) {
		Cart cart = cartRepo.findById(cartId).orElseThrow(() -> new CustomException("cart", "Invalid Cart ID"));
		// if (cart.getProducts().isEmpty()) throw new CustomException("cart is empty");
		return cart;
	}

	@Override
	public Cart addToCart(ItemDto itemDto, Long userId) {
		
		Cart cart = userRepo.findById(userId).orElseThrow(() -> new CustomException("user", "Invalid User ID")).getCart();
		ProductInfo productInfo = productInfoRepo.findByproductId(itemDto.getProductId())
			.orElseThrow(() -> new CustomException("productInfo", "Invalid Product ID"));
		if (productInfo.getProductStock() < itemDto.getQuantity())
			throw new CustomException("cart", "Insufficient product stock for product ID: " + itemDto.getProductId());

		ProductInOrder productInOrder;
		Optional<ProductInOrder> old = cart.getProducts().stream().filter(e -> e.getProductId().equals(itemDto.getProductId())).findFirst();
		if (old.isPresent()){
			productInOrder = old.get();
			productInOrder.setProductStock( old.get().getProductStock() + itemDto.getQuantity());
			productInOrder.setProductPrice(BigDecimal.valueOf(productInfo.getProductPrice().floatValue() * productInOrder.getProductStock()));
		}
		else {
			productInOrder = new ProductInOrder();
			productInOrder.setProductCategory(productInfo.getProductCategory().getCategoryDescription());
			productInOrder.setProductId(productInfo.getProductId());
			productInOrder.setProductName(productInfo.getProductName());
			productInOrder.setProductDescription(productInfo.getProductDescription());
			productInOrder.setProductIcon(productInfo.getProductIcon());
			productInOrder.setDiscountPercent(productInfo.getDiscountPercent());
			productInOrder.setCart(cart);
			productInOrder.setProductStock(itemDto.getQuantity());
			productInOrder.setProductPrice(productInfo.getProductPrice());
		}
		productInOrderRepository.saveAndFlush(productInOrder);
		// TODO - Return boolean as below code will not give latest cart
		return cartRepo.findByUserDetails_UserDetailsId(userId).orElseThrow(() -> new CustomException("user", "Invalid User ID"));
	}
	
	@Override
	public Cart deleteFromCart(Long productId, Long id) {
		Cart cart = userRepo.findById(id).orElseThrow(() -> new CustomException("cart", "Invalid user ID")).getCart();
		List<ProductInOrder> products = productInOrderRepository.findByCart_CartId(cart.getCartId());
		if (products.size() == 0) throw new CustomException("cart", "Cart is empty");
		Optional<ProductInOrder> toBeDeleted = products.stream().filter(p -> p.getProductId().equals(productId)).findFirst();
		if(toBeDeleted.isPresent()){
			toBeDeleted.get().setCart(null);
			productInOrderRepository.deleteById(toBeDeleted.get().getProductInOrderId());
		}
		else throw new CustomException("product", "Product not in cart");
		return cart;
	}

	@Override
	public Cart mergeCart(CartDto cartDto, Long id) {
		Cart finalCart = userRepo.findById(id).orElseThrow(() -> new CustomException("cart", "User ID not found")).getCart();
		List<ProductInOrder> productInOrders = new ArrayList<>();


		// Create ProfuctPrderList for local items
		for (ItemDto item : cartDto.getItemDtoList()) {
			ProductInfo newProduct = productRepository.findById(item.getProductId()).orElseThrow(() -> new CustomException("product", "Invalid product ID"));
			ProductInOrder productInOrder = new ProductInOrder();
			productInOrder.setProductCategory(newProduct.getProductCategory().getCategoryDescription());
			productInOrder.setProductId(newProduct.getProductId());
			productInOrder.setProductName(newProduct.getProductName());
			productInOrder.setProductDescription(newProduct.getProductDescription());
			productInOrder.setProductIcon(newProduct.getProductIcon());
			productInOrder.setProductStock(item.getQuantity());
			productInOrder.setProductPrice(newProduct.getProductPrice());
			;
			productInOrders.add(productInOrder);
		}

		// Merge
    productInOrders.forEach(productInOrder -> {
        Set<ProductInOrder> set = finalCart.getProducts();
        Optional<ProductInOrder> old = set.stream().filter(e -> e.getProductId().equals(productInOrder.getProductId())).findFirst();
            ProductInOrder prod;
        if (old.isPresent()) {
            prod = old.get();
            prod.setProductStock(productInOrder.getProductStock() + prod.getProductStock());
        } else {
            prod = productInOrder;
            prod.setCart(finalCart);
            finalCart.getProducts().add(prod);
        }
        productInOrderRepository.save(prod);
    });
    cartRepo.save(finalCart);
		return finalCart;
	}

	@Override
	public Cart fetchByUserId(Long userId) {
		return cartRepo.findByUserDetails_UserDetailsId(userId).orElseThrow(() -> new CustomException("cart", "Invalid user ID"));
	}

}
