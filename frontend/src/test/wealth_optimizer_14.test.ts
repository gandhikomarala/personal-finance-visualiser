import { describe, it, expect } from 'vitest';
import { PortfolioOptimizer0014 } from '../finance_core/wealth_telemetry_0014.ts';

describe('PortfolioOptimizer #14', () => {
  it('should initialize telemetry correctly', () => {
    const optimizer = new PortfolioOptimizer0014();
    const status = optimizer.getTelemetryStatus();
    expect(status.active).toBe(true);
    expect(status.id).toBe(14);
  });

  it('should project terminal wealth growth', () => {
    const optimizer = new PortfolioOptimizer0014();
    const futureValue = optimizer.projectTerminalWealth(100000, 2000, 10);
    expect(futureValue).toBeGreaterThan(100000);
  });

  it('should calculate rebalancing variance delta', () => {
    const optimizer = new PortfolioOptimizer0014();
    const delta = optimizer.computeRebalanceDelta(60, 55);
    expect(delta).toBe(5);
  });
});
