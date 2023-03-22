build:
	docker compose build
up:
	docker compose up -d
down:
	docker compose down --rmi all --volumes --remove-orphans
ps:
	docker compose ps
log:
	docker compose logs -f $(ARGS)
sh:
	docker compose run --rm app sh -c "$(ARGS)"
init:
	docker compose exec app bash
