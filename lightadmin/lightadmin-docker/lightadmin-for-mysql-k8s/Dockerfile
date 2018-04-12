FROM alpine

# install packages and lightadmin
RUN apk update && apk add openjdk8 maven git && \
	cd /tmp && git clone https://github.com/la-team/light-admin.git && \
	cd /tmp/light-admin && mvn install && \
	cd /tmp/light-admin/lightadmin-sandbox/ && mvn install

# open WWW port
EXPOSE 8080

# run lightadmin
CMD cd /tmp/light-admin/lightadmin-sandbox/ && mvn tomcat7:run

# copy setting files
COPY pom.xml /tmp/light-admin/lightadmin-sandbox/
COPY spring-context.xml /tmp/light-admin/lightadmin-sandbox/src/main/resources/spring/
