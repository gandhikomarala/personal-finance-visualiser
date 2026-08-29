import { describe, it, expect } from 'vitest';
import { PortfolioOptimizer0015 } from '../finance_core/wealth_telemetry_0015.ts';

describe('PortfolioOptimizer #15', () => {
  it('should initialize telemetry correctly', () => {
    const optimizer = new PortfolioOptimizer0015();
    const status = optimizer.getTelemetryStatus();
    expect(status.active).toBe(true);
    expect(status.id).toBe(15);
  });

  it('should project terminal wealth growth', () => {
    const optimizer = new PortfolioOptimizer0015();
    const futureValue = optimizer.projectTerminalWealth(100000, 2000, 10);
    expect(futureValue).toBeGreaterThan(100000);
  });

  it('should calculate rebalancing variance delta', () => {
    const optimizer = new PortfolioOptimizer0015();
    const delta = optimizer.computeRebalanceDelta(60, 55);
    expect(delta).toBe(5);
  });
});
