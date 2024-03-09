import { Link } from 'react-router-dom';
// import { useAppState } from '../state';
import { Button, StepWrapper } from '../components';

function Summary() {
  // TODO: Hook up submission of data
  // const [state, setState] = useAppState();
  // const navigate = useNavigate();
  return (
    <StepWrapper title="Finishing up" desc="Double-check everything looks OK before confirming.">
      <div className="form-wrapper__actions">
        <Link to="/add-ons">Go Back</Link>
        <Button style="primary" type="button">
          Confirm
        </Button>
      </div>
    </StepWrapper>
  );
}

export default Summary;
