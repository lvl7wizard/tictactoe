import { useState } from "react";
import styled from "styled-components";

interface SetUpProps {
  usernames: { playerOne: string; playerTwo: string; confirmed: boolean };
  setUsernames: React.Dispatch<
    React.SetStateAction<{ playerOne: string; playerTwo: string }>
  >;
}

const UsernameForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  background-color: #1a2639;
  padding: 16px;
  border: solid 1px;
  box-shadow: 5px 5px 3px 0px rgba(0,0,0,0.3),  inset 0px 0px 5px 0px rgba(255, 255, 255, 0.2);

  border-radius: 20px;
  gap: 10px;
  p {
    margin: 0;
  }

  input {
    background-color: #3e4a61;
    color: #d9dad7;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
`;

const StyledSubmit = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  border: solid 1px;
  border-radius: 20px;
  padding: 15px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transition: background-color 0.3s ease;
    cursor: pointer;
  }
`;

const FeedbackText = styled.p`
  color: #c24d2c;
  font-size: 0.75rem;
`;

const SetUp = ({ usernames, setUsernames }: SetUpProps) => {
  const [formIssues, setFormIssues] = useState({
    playerOne: false,
    playerTwo: false,
    feedback: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormIssues({ playerOne: false, playerTwo: false, feedback: "" });
    setUsernames((prevUsernames) => ({
      ...prevUsernames,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    setFormIssues({ playerOne: false, playerTwo: false, feedback: "" });
    event.preventDefault();
    if (usernames.playerOne === "" || usernames.playerTwo === "") {
      setFormIssues({
        playerOne: usernames.playerOne === "",
        playerTwo: usernames.playerTwo === "",
        feedback: "usernames cannot be blank",
      });
    } else if (usernames.playerOne === usernames.playerTwo) {
      setFormIssues({
        playerOne: true,
        playerTwo: true,
        feedback: "usernames cannot be the same",
      });
    } else {
      setUsernames((prevUsernames) => ({
        ...prevUsernames,
        confirmed: true,
      }));
    }
  };

  return (
    <UsernameForm onSubmit={handleSubmit}>
      <p>enter your names</p>
      <label>
        Player <span style={{ color: "#00a6a6" }}>X</span>:{" "}
        <input
          type="text"
          name="playerOne"
          onChange={handleChange}
          style={{ border: formIssues.playerOne ? "#c24d2c solid" : "none" }}
        />
      </label>
      <label>
        Player <span style={{ color: "#c24d2c" }}>O</span>:{" "}
        <input
          type="text"
          name="playerTwo"
          onChange={handleChange}
          style={{ border: formIssues.playerTwo ? "#c24d2c solid" : "none" }}
        />
      </label>
      {formIssues.feedback !== "" ? (
        <FeedbackText>Error: {formIssues.feedback}</FeedbackText>
      ) : null}
      <StyledSubmit type="submit" name="submit" />
    </UsernameForm>
  );
};

export default SetUp;
