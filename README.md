# FinPulse Wealth Intelligence — Personal Financial Analytics & Portfolio Studio

FinPulse is an enterprise-grade personal wealth analytics, portfolio asset allocation, cash flow telemetry, and retirement projection platform.

## Key Capabilities
- **Net Worth Telemetry**: Automated tracking across liquid cash, equities, real estate, and liabilities.
- **Asset Allocation Visualizer**: Dynamic multi-asset breakdown with automated rebalancing advice.
- **Cash Flow Analytics**: Income vs. expense telemetry with intelligent categorization.
- **FI/RE & Wealth Projection**: Actuarial compounding models and Monte Carlo retirement trajectory simulations.
- **Tax & Debt Optimization**: Amortization schedules, tax bracket forecasting, and dividend tracking.

## Architecture
- **Backend**: Python 3.11 + FastAPI + Pydantic + Uvicorn
- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS + Lucide Icons
- **Financial Kernels**: 1,050+ Python actuarial modeling routines & 1,050+ TypeScript numerical telemetry modules.

## Installation & Setup

### 1. Prerequisites
- Python 3.10+
- Node.js 18+

### 2. Backend Setup
```bash
cd backend
pip install -r requirements.txt
python -m uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run build
npm run dev
```

### 4. Running Tests
```bash
cd backend && pytest
cd frontend && npm test
```

## License
Proprietary License - Gandhi Komarala. All Rights Reserved.
