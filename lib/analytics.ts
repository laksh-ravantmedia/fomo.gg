declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const analytics = {
  pageView: (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: url,
      });
    }
  },
  
  event: (action: string, params: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, params);
    }
  },
  
  trackButtonClick: (buttonName: string, location: string) => {
    analytics.event('button_click', { 
      button_name: buttonName,
      location: location
    });
  },
  
  trackSectionView: (sectionName: string) => {
    analytics.event('section_view', { 
      section_name: sectionName 
    });
  },
  
  trackDownloadClick: (platform: 'app-store' | 'play-store') => {
    analytics.event('download_click', { 
      platform: platform 
    });
  }
};
