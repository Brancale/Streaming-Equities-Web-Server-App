FROM ubuntu:latest
MAINTAINER Iuliia Semchenkova
RUN apt-get update -y
RUN apt-get install -y python3 python3-pip
COPY . /app
WORKDIR /app
RUN pip3 install -r requirements.txt
EXPOSE 5000
ENTRYPOINT ["python3"]
CMD [ "./app.py" ]




