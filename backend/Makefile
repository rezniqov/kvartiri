
DEV_COMPOSE = docker compose -f docker-compose.dev.yml
PROD_COMPOSE = docker compose -f docker-compose.yml

.PHONY: dev dev-build dev-down prod prod-build prod-down generate migrate-dev

dev:
	$(DEV_COMPOSE) build --no-cache
	$(DEV_COMPOSE) up -d --force-recreate

dev-build:
	$(DEV_COMPOSE) build

dev-down:
	$(DEV_COMPOSE) down

prod:
	$(PROD_COMPOSE) up --build -d

prod-build:
	$(PROD_COMPOSE) build

prod-down:
	$(PROD_COMPOSE) down

generate:
	bunx --bun prisma generate

migrate-dev:
	bunx --bun prisma migrate dev --name init
