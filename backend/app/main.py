"""FinPulse Wealth Intelligence Platform API."""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any, Optional

app = FastAPI(
    title="FinPulse Wealth API",
    version="4.2.0",
    description="Enterprise Personal Wealth Intelligence, Portfolio Asset Allocation & Cash Flow Telemetry API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

WEALTH_OVERVIEW = {
    "net_worth": 348750.00,
    "net_worth_change_ytd": 14.8,
    "liquid_assets": 84200.00,
    "invested_assets": 285400.00,
    "total_liabilities": 20850.00,
    "monthly_income": 12500.00,
    "monthly_expenses": 5420.00,
    "savings_rate_pct": 56.6
}

ASSET_ALLOCATION = [
    {"asset_class": "Equities & ETFs", "percentage": 54.0, "value": 154116.00, "color": "#06b6d4"},
    {"asset_class": "Fixed Income & Bonds", "percentage": 22.0, "value": 62788.00, "color": "#3b82f6"},
    {"asset_class": "Real Estate / REITs", "percentage": 14.0, "value": 39956.00, "color": "#10b981"},
    {"asset_class": "Crypto & Commodities", "percentage": 6.0, "value": 17124.00, "color": "#f59e0b"},
    {"asset_class": "Cash Equivalents", "percentage": 4.0, "value": 11416.00, "color": "#8b5cf6"}
]

TRANSACTIONS = [
    {"id": "tx-1", "title": "Quarterly Dividend Payout", "category": "Investment", "amount": 840.50, "type": "INFLOW", "date": "2026-08-28"},
    {"id": "tx-2", "title": "Consulting Retainer Invoice #409", "category": "Income", "amount": 4200.00, "type": "INFLOW", "date": "2026-08-25"},
    {"id": "tx-3", "title": "Cloud Infrastructure Hosting", "category": "Operations", "amount": -142.80, "type": "OUTFLOW", "date": "2026-08-24"},
    {"id": "tx-4", "title": "Automated Index Fund Contribution", "category": "Savings", "amount": -2500.00, "type": "OUTFLOW", "date": "2026-08-20"},
    {"id": "tx-5", "title": "Real Estate Property Management", "category": "Housing", "amount": -1250.00, "type": "OUTFLOW", "date": "2026-08-18"}
]

class ProjectionRequest(BaseModel):
    current_net_worth: float
    monthly_contribution: float
    annual_return_pct: float
    years: int

@app.get("/health")
def health_check():
    return {
        "status": "HEALTHY",
        "service": "FinPulse Wealth Intelligence Engine",
        "version": "4.2.0",
        "tracked_portfolios": 1840,
        "telemetry_engine": "actuarial_monte_carlo"
    }

@app.get("/api/wealth/overview")
def get_wealth_overview():
    return WEALTH_OVERVIEW

@app.get("/api/wealth/allocation")
def get_asset_allocation():
    return {"allocation": ASSET_ALLOCATION}

@app.get("/api/wealth/transactions")
def get_transactions():
    return {"transactions": TRANSACTIONS}

@app.post("/api/wealth/project")
def project_wealth_growth(req: ProjectionRequest):
    r = (req.annual_return_pct / 100.0) / 12.0
    months = req.years * 12
    trajectory = []
    current = req.current_net_worth

    for yr in range(1, req.years + 1):
        for _ in range(12):
            current = (current + req.monthly_contribution) * (1 + r)
        trajectory.append({
            "year": yr,
            "projected_net_worth": round(current, 2)
        })

    return {
        "final_projected_net_worth": round(current, 2),
        "total_contributions": round(req.monthly_contribution * months, 2),
        "total_compound_gains": round(current - req.current_net_worth - (req.monthly_contribution * months), 2),
        "trajectory": trajectory
    }
