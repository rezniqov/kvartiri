
DEV_COMPOSE = docker compose -f docker-compose.dev.yml
PROD_COMPOSE = docker compose -f docker-compose.yml
PRISMA = bunx --bun prisma

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
	$(PRISMA) generate

migrate-dev:
	$(PRISMA) migrate dev --name init
