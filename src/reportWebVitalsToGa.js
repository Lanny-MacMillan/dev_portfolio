export function reportWebVitalsToGA(metric) {
  // Report basic web vitals
  window.gtag('event', metric.name, {
    event_category: 'Web Vitals',
    value: metric.value,
    event_label: metric.id, // unique to the current page load
    non_interaction: true, // doesn't affect bounce rate
  });

  // User Timing Metrics allow you to track the duration of specific tasks or events. For example, you can measure how long it takes for a user to interact with a page after it loads
  if (metric.name === 'LCP' || metric.name === 'FID') {
    window.gtag('event', 'timing_complete', {
      name: metric.name,
      event_category: 'User Timing',
      value: metric.value, // value in ms
    });
  }

  // Custom Dimensions or user engagement allows you to capture additional contextual information that isn't automatically tracked by Google Analytics
  if (metric.name === 'CLS') {
    window.gtag('event', 'custom_dimension', {
      event_category: 'Custom Data',
      event_label: 'CLS (Cumulative Layout Shift) Score',
      value: metric.value,
    });
  }

  // Scroll Depth Tracking (as part of engagement metrics) helps understand how much of your content users are engaging with. It's particularly useful for long pages like blogs or articles.
  window.addEventListener('scroll', () => {
    const scrollDepth = Math.round(
      (window.scrollY / document.body.scrollHeight) * 100,
    );
    if (scrollDepth > 50) {
      window.gtag('event', 'scroll', {
        event_category: 'Engagement',
        event_label: `${scrollDepth}%`,
        non_interaction: true,
      });
    }
  });

  // Tracking the time users spend on a page provides insights into user engagement and session duration.
  let startTime = Date.now();
  window.addEventListener('beforeunload', () => {
    let timeSpent = Date.now() - startTime;
    window.gtag('event', 'time_on_page', {
      event_category: 'Engagement',
      value: timeSpent, // value in ms
    });
  });

  // Error reporting help identify issues that users encounter, crucial for debugging and improving user experience.
  window.addEventListener('error', (event) => {
    window.gtag('event', 'exception', {
      description: event.message,
      fatal: false, // Set to true if the error is critical
    });
  });
}
