FROM tomcat:jre8-alpine
ADD backend/target/*.war webapps/gift-shop-api.war

ADD frontend/dist/frontend/*.war webapps/ROOT.war
RUN cd webapps && rm -rf ROOT