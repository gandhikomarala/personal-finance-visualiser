import { describe, it, expect } from 'vitest';
import { PortfolioOptimizer0001 } from '../finance_core/wealth_telemetry_0001.ts';

describe('PortfolioOptimizer #1', () => {
  it('should initialize telemetry correctly', () => {
    const optimizer = new PortfolioOptimizer0001();
    const status = optimizer.getTelemetryStatus();
    expect(status.active).toBe(true);
    expect(status.id).toBe(1);
  });

  it('should project terminal wealth growth', () => {
    const optimizer = new PortfolioOptimizer0001();
    const futureValue = optimizer.projectTerminalWealth(100000, 2000, 10);
    expect(futureValue).toBeGreaterThan(100000);
  });

  it('should calculate rebalancing variance delta', () => {
    const optimizer = new PortfolioOptimizer0001();
    const delta = optimizer.computeRebalanceDelta(60, 55);
    expect(delta).toBe(5);
  });
});
