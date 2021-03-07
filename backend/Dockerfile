FROM maven:3.6.3-jdk-8 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests
RUN cp target/*.war app.war

FROM openjdk:8-jre-alpine
COPY --from=build /app .
EXPOSE 1999
ENTRYPOINT [ "java", "-jar", "app.war" ]
