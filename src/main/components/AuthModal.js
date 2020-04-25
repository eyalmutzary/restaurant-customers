import React, {
  useMemo,
  useContext,
  useCallback,
  useState,
  useRef,
} from "react";
import styled from "styled-components";
import { Modal, Input, Button, LoadingSpinner } from "../../shared/components";
import { AuthTableNumContext } from "../../app";
import axios from "axios";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableNumWrapper = styled.div`
  display: flex;
  padding: 25px;
  flex-wrap: wrap;
  justify-content: center;
`;

const TableNum = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 4px;
  margin: 10px;
  width: 60px;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.bordeaux};
    transition: ease-in 0.2s;
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
`;

const AuthModal = ({ onHide }) => {
  const [authTableNum, setAuthTableNum] = useContext(AuthTableNumContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const passwordInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [tableNums, setTableNums] = useState();

  const fetchTableNums = useCallback(async () => {
    setIsLoading(true);
    try {
      setErrorMessage();
      const res = await axios.get("/customerTables?status=ordering"); // change to status empty
      let numsArr = [];
      res.data.forEach(({ tableNum }) => numsArr.push(tableNum));
      setTableNums(numsArr);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setErrorMessage("There aren't any empty tables.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const onValidatePassword = useCallback(
    (password) => {
      if (password === "admin123") {
        setIsAuthenticated(true);
        fetchTableNums();
      } else if (!password) {
        setErrorMessage("Please enter the password.");
      } else {
        setErrorMessage("Password incorrect");
      }
    },
    [fetchTableNums]
  );

  const onSelectTableNum = useCallback(
    (tableNum) => {
      setAuthTableNum(tableNum);
      onHide();
    },
    [setAuthTableNum, onHide]
  );

  return (
    <Modal title="Change Table Number" onHide={onHide}>
      {isAuthenticated ? (
        <TableNumWrapper>
          {isLoading && <LoadingSpinner />}
          {tableNums ? (
            tableNums.map((tableNum) => (
              <TableNum
                key={tableNum}
                onClick={() => onSelectTableNum(tableNum)}
              >
                {tableNum}
              </TableNum>
            ))
          ) : (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          )}
        </TableNumWrapper>
      ) : (
        <FormWrapper>
          <Input placeholder="Table Number" forwardRef={passwordInputRef} />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Button.Black
            type="button"
            onClick={() => onValidatePassword(passwordInputRef.current.value)}
          >
            Confirm
          </Button.Black>
        </FormWrapper>
      )}
    </Modal>
  );
};

export default AuthModal;
