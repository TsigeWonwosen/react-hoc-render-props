import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ location }) {
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', duration: 2000 });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

export default withRouter(ScrollToTop);
