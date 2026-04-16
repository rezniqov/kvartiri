DEV_COMPOSE = docker compose -f docker-compose.dev.yml
PROD_COMPOSE = docker compose -f docker-compose.yml

.PHONY: dev dev-build dev-down prod prod-build prod-down

dev:
	$(DEV_COMPOSE) up --build -d

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
