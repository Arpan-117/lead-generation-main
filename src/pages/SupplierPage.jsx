import { useEffect } from 'react';
import { RequirementForm } from '../organisms/RequirementForm';

function RequirementPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <RequirementForm />;
}

export default RequirementPage;