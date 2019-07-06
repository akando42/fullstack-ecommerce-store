import { connect } from 'react-redux'
import * as SubscriberActions from './SubscriptionForm.actions'
import { bindActionCreators } from 'redux'
import SubscriptionForm from './SubscriptionForm'

const mapStateToProps = state => ({
	subscribersCount: state.subscribers.length
})


const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(SubscriberActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SubscriptionForm);