run_on_win() {
  docker-compose stop

  docker-compose build

  docker-compose up -d

  docker-compose start
}

run_on_win
