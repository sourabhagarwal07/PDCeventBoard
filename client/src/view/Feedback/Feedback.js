import React, {Fragment} from "react";
import { Segment, Button, Grid, GridRow} from "semantic-ui-react";
const Feedback = (props) => {
    return(
        <Fragment>
        <Segment placeholder>
            <Grid>
                <GridRow>
                <Grid.Column class="text">
                <h3 class="ui center aligned header">Please share your website experience with us. Your feedback help us improve.</h3>
                <Button variant="outline-dark" href="https://docs.google.com/forms/d/e/1FAIpQLSdPQgcmGqcqlMpWfqdvuE2FWxXMeURalkNPQOku9txNmLmhYw/viewform?embedded=true" 
                size='lg' className="survey-reminder" target="_blank">
                <h4>
                   Take the Survey 
                </h4>
                </Button>
                </Grid.Column>
                </GridRow>
                </Grid>
          </Segment>
          </Fragment>
    )
}
export default Feedback;