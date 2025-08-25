FROM ruby:3.0
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
    nodejs \
    postgresql-client \
    libpq-dev \
    build-essential && \
    rm -rf /var/lib/apt/lists/*
RUN mkdir /healthapp
WORKDIR /healthapp
RUN git clone https://github.com/vishnubob/wait-for-it.git /tmp/wait-for-it \
  && cp /tmp/wait-for-it/wait-for-it.sh /usr/local/bin/ \
  && rm -rf /tmp/wait-for-it
COPY Gemfile /healthapp/Gemfile
COPY Gemfile.lock /healthapp/Gemfile.lock
RUN bundle install
COPY . /healthapp

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
ENV DISABLE_SPRING=1
