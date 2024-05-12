interface UserFeedbackProps {
    userFeedback: string;
}

function UserFeedback ({userFeedback}: UserFeedbackProps) {
    return <p className="user-feedback">{userFeedback}</p>
}

export default UserFeedback;