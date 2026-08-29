"""Unit test suite for FinPulse wealth modeling routines #4."""
import pytest
from app.finance_core.wealth_module_0004 import WealthOptimizer0004

def test_sharpe_ratio_4():
    opt = WealthOptimizer0004()
    ratio = opt.calculate_sharpe_ratio(0.10)
    assert isinstance(ratio, float)
    assert ratio > 0

def test_tax_drag_4():
    opt = WealthOptimizer0004()
    net_gain = opt.simulate_tax_drag(10000.0, 2)
    assert net_gain == 8500.0

def test_retirement_runway_4():
    opt = WealthOptimizer0004()
    runway = opt.estimate_retirement_runway(500000.0, 40000.0)
    assert runway > 0.0
