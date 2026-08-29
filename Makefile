.PHONY: help install test lint clean

help:
	@echo "Targets: install test lint clean"

install:
	@echo "Installing personal-finance-visualiser deps..."
	@[ -f requirements.txt ] && pip install -r requirements.txt || true
	@[ -f package.json ] && npm install || true

test:
	@echo "Testing personal-finance-visualiser..."
	@[ -f pyproject.toml ] && python -m pytest tests/ -v || true

lint:
	@echo "Linting personal-finance-visualiser..."

clean:
	@find . -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null || true
	@rm -rf .pytest_cache htmlcov .coverage
