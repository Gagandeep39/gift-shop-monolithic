package com.online.giftshop.services.implementation;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.online.giftshop.dto.NotificationEmail;
import com.online.giftshop.dto.OrderDto;
import com.online.giftshop.entities.Address;
import com.online.giftshop.entities.DeliveryHistory;
import com.online.giftshop.entities.OrderMain;
import com.online.giftshop.entities.ProductInOrder;
import com.online.giftshop.entities.ProductInfo;
import com.online.giftshop.entities.UserDetails;
import com.online.giftshop.enums.OrderStatus;
import com.online.giftshop.enums.PaymentType;
import com.online.giftshop.exceptions.CustomException;
import com.online.giftshop.repositories.CartRepository;
import com.online.giftshop.repositories.DeliveryHistoryRepository;
import com.online.giftshop.repositories.OrderMainRepository;
import com.online.giftshop.repositories.ProductInOrderRepository;
import com.online.giftshop.repositories.ProductInfoRepository;
import com.online.giftshop.repositories.UserDetailsRepository;
import com.online.giftshop.services.EmailService;
import com.online.giftshop.services.OrderMainService;

@Service
public class OrderMainServiceImpl implements OrderMainService {

	@Autowired
	UserDetailsRepository userRepo;

	@Autowired
	ProductInOrderRepository productRepo;

	@Autowired
	OrderMainRepository orderRepo;
	@Autowired
	CartRepository cartRepository;
	@Autowired
	ProductInfoRepository productInfoRepository;
	@Autowired
	DeliveryHistoryRepository historyRepository;
	@Autowired
	private EmailService emailService;

	@Override
	public Map<String, String> checkOut(Long id) {
		UserDetails user = this.userRepo.findById(id).orElseThrow(() -> new CustomException("user", "Invalid User ID"));
		Set<ProductInOrder> products = user.getCart().getProducts();
		if (products.size() == 0)
			throw new CustomException("cart", "Cart is empty");
		OrderMain orderMain = new OrderMain();
		orderMain.setUserId(user.getUserDetailsId());
		orderMain.setBuyerAddress(createUserAddress(user.getAddress()));// change addr
		orderMain.setBuyerCity(user.getAddress().getCity());
		orderMain.setBuyerEmail(user.getEmailId());
		orderMain.setBuyerName(user.getFirstName() + "  " + user.getLastName());
		orderMain.setBuyerPhone(user.getPhoneNo());
		orderMain.setBuyerPincode(user.getAddress().getPincode());
		orderMain.setBuyerState(user.getAddress().getState());
		orderMain.setOrderStatus(OrderStatus.NEW);
		// TODO - Add payment ID logic
		orderMain.setPaymentId((long) 1000011000); // Dummyy
		orderMain.setPaymentType(PaymentType.ONLINE);
		orderRepo.save(orderMain);
		Double total = 0D;
		Double discountPrice = 0D;
		// int DisTotal=0;
		for (ProductInOrder p : products) {
			p.setCart(null);
			p.setOrderMain(orderMain);
			total += p.getProductPrice().floatValue();

			if (p.getDiscountPercent() == 0)
				discountPrice = total;
			else
				discountPrice = discountPrice
						+ (p.getProductPrice().doubleValue() - (p.getProductPrice().doubleValue() * p.getDiscountPercent() * 0.01));

			reduceStock(p.getProductId(), p.getProductStock());
			productRepo.save(p);
		}
		orderMain.setDeliveryCharge(BigDecimal.valueOf(0));
		orderMain.setOrderAmount(BigDecimal.valueOf(total));
		orderMain.setDiscountedAmount(BigDecimal.valueOf(discountPrice));
		orderMain.setFinalPrice(BigDecimal.valueOf(discountPrice));
		orderRepo.save(orderMain);
		createDeliveryHistoryEntry(orderMain.getOrderId());
		return Collections.singletonMap("orderId", orderMain.getOrderId().toString());
	}

	private void createDeliveryHistoryEntry(Long orderId) {
		DeliveryHistory history = new DeliveryHistory();
		history.setOrderId(orderId);
		history.setOrderStatus(OrderStatus.NEW);
		history.setUpdatedOn(System.currentTimeMillis());
		historyRepository.save(history);
	}

	private String createUserAddress(Address address) {
		return address.getArea() + ", " + address.getCity() + ", " + address.getState() + " " + address.getPincode();
	}

	public ProductInfo reduceStock(Long productId, Integer quantity) {
		ProductInfo productInfo = productInfoRepository.findById(productId)
				.orElseThrow(() -> new CustomException("product", "Not Found"));
		if (quantity > productInfo.getProductStock())
			throw new CustomException("product", "Insfficient products");
		else
			productInfo.setProductStock(productInfo.getProductStock() - quantity);
		return productInfo;
	}

	@Override
	public Map<String, String> manualCheckout(Long id, OrderDto orderDto) {
		UserDetails user = this.userRepo.findById(id).orElseThrow(() -> new CustomException("user", "Invalid User ID"));
		Set<ProductInOrder> products = user.getCart().getProducts();
		if (products.size() == 0)
			throw new CustomException("cart", "Cart is empty");
		OrderMain orderMain = new OrderMain();
		Address address = new Address();
		address.setArea(orderDto.getArea());
		address.setPincode(orderDto.getPincode());
		address.setCity(orderDto.getCity());
		address.setState(orderDto.getState());
		orderMain.setUserId(user.getUserDetailsId());
		orderMain.setBuyerAddress(createUserAddress(address));// change addr
		orderMain.setBuyerCity(orderDto.getCity());
		orderMain.setBuyerEmail(user.getEmailId());
		orderMain.setBuyerName(user.getFirstName() + "  " + user.getLastName());
		orderMain.setBuyerPhone(user.getPhoneNo());
		orderMain.setBuyerPincode(orderDto.getPincode());
		orderMain.setBuyerState(orderDto.getState());
		orderMain.setOrderStatus(OrderStatus.NEW);
		orderMain.setPaymentId(orderDto.getPaymentId()); // Dummyy
		orderMain.setPaymentType(PaymentType.ONLINE);
		orderRepo.save(orderMain);
		Double total = 0D;
		Double discountPrice = 0D;
		// int DisTotal=0;
		for (ProductInOrder p : products) {
			p.setCart(null);
			p.setOrderMain(orderMain);
			total += p.getProductPrice().floatValue();

			if (p.getDiscountPercent() == 0)
				discountPrice = total;
			else
				discountPrice = discountPrice
						+ (p.getProductPrice().doubleValue() - (p.getProductPrice().doubleValue() * p.getDiscountPercent() * 0.01));

			reduceStock(p.getProductId(), p.getProductStock());
			productRepo.save(p);
		}
		orderMain.setDeliveryCharge(orderDto.getDeliveryCharge());
		orderMain.setOrderAmount(BigDecimal.valueOf(total));
		orderMain.setDiscountedAmount(BigDecimal.valueOf(discountPrice));
		
		orderMain.setFinalPrice(BigDecimal.valueOf(discountPrice + orderDto.getDeliveryCharge().doubleValue()));
		orderRepo.save(orderMain);
		createDeliveryHistoryEntry(orderMain.getOrderId());
		// Enble Email
		// sendEmail(user, orderMain);
		
		return Collections.singletonMap("orderId", orderMain.getOrderId().toString());
	}

	private void sendEmail(UserDetails user, OrderMain orderMain) {
		NotificationEmail email = new NotificationEmail();
		email.setTo(user.getEmailId());
		email.setBody("Order Successfully Created with ID: " + orderMain.getOrderId());
		emailService.SendEmail(email);
	}

}
