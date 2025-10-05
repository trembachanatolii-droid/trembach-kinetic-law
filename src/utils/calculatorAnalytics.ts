/**
 * Calculator Analytics Tracking
 * Track user interactions with compensation calculators
 */

export interface CalculatorEvent {
  calculatorType: string;
  step: number;
  action: 'started' | 'step_completed' | 'calculated' | 'abandoned';
  estimatedValue?: number;
  formData?: Record<string, any>;
}

class CalculatorAnalytics {
  private sessionId: string;
  private startTime: number | null = null;

  constructor() {
    this.sessionId = this.generateSessionId();
  }

  private generateSessionId(): string {
    return `calc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Track calculator start
   */
  trackStart(calculatorType: string) {
    this.startTime = Date.now();
    this.trackEvent({
      calculatorType,
      step: 1,
      action: 'started'
    });
  }

  /**
   * Track step completion
   */
  trackStepComplete(calculatorType: string, step: number, formData?: Record<string, any>) {
    this.trackEvent({
      calculatorType,
      step,
      action: 'step_completed',
      formData
    });
  }

  /**
   * Track final calculation
   */
  trackCalculation(calculatorType: string, estimatedValue: number, formData?: Record<string, any>) {
    const timeSpent = this.startTime ? Date.now() - this.startTime : 0;
    
    this.trackEvent({
      calculatorType,
      step: 3,
      action: 'calculated',
      estimatedValue,
      formData
    });

    // Track conversion value
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'calculator_completed', {
        calculator_type: calculatorType,
        estimated_value: estimatedValue,
        time_spent: timeSpent,
        session_id: this.sessionId
      });
    }
  }

  /**
   * Track calculator abandonment
   */
  trackAbandonment(calculatorType: string, step: number) {
    const timeSpent = this.startTime ? Date.now() - this.startTime : 0;
    
    this.trackEvent({
      calculatorType,
      step,
      action: 'abandoned'
    });

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'calculator_abandoned', {
        calculator_type: calculatorType,
        abandoned_at_step: step,
        time_spent: timeSpent,
        session_id: this.sessionId
      });
    }
  }

  /**
   * Internal event tracking
   */
  private trackEvent(event: CalculatorEvent) {
    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Calculator Analytics]', event);
    }

    // Send to analytics platform (Google Analytics, Mixpanel, etc.)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'calculator_interaction', {
        calculator_type: event.calculatorType,
        step: event.step,
        action: event.action,
        estimated_value: event.estimatedValue,
        session_id: this.sessionId,
        timestamp: new Date().toISOString()
      });
    }

    // Could also send to your backend API for detailed analytics
    this.sendToBackend(event);
  }

  /**
   * Send analytics to backend (optional)
   */
  private async sendToBackend(event: CalculatorEvent) {
    try {
      // Uncomment when backend endpoint is ready
      // await fetch('/api/analytics/calculator', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...event,
      //     sessionId: this.sessionId,
      //     timestamp: new Date().toISOString(),
      //     userAgent: navigator.userAgent,
      //     referrer: document.referrer
      //   })
      // });
    } catch (error) {
      console.error('Failed to send analytics:', error);
    }
  }
}

// Singleton instance
export const calculatorAnalytics = new CalculatorAnalytics();

/**
 * React Hook for calculator analytics
 */
export function useCalculatorAnalytics(calculatorType: string) {
  const trackStart = () => calculatorAnalytics.trackStart(calculatorType);
  
  const trackStepComplete = (step: number, formData?: Record<string, any>) => 
    calculatorAnalytics.trackStepComplete(calculatorType, step, formData);
  
  const trackCalculation = (estimatedValue: number, formData?: Record<string, any>) => 
    calculatorAnalytics.trackCalculation(calculatorType, estimatedValue, formData);
  
  const trackAbandonment = (step: number) => 
    calculatorAnalytics.trackAbandonment(calculatorType, step);

  return {
    trackStart,
    trackStepComplete,
    trackCalculation,
    trackAbandonment
  };
}
