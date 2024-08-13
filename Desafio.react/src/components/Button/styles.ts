import styled from 'styled-components';

export const ButtonContainer = styled.button<{ disabled: boolean }>`
    width: 100%;
    height: 42px;
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#81259D')};
    color: ${({ disabled }) => (disabled ? '#666' : '#FFF')};
    border: 1px solid ${({ disabled }) => (disabled ? '#ccc' : '#81259D')};
    border-radius: 21px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
    transition: background-color 0.3s, border-color 0.3s;

    &:hover {
        background-color: ${({ disabled }) => (disabled ? '#ccc' : '#6a1f7b')};
        border-color: ${({ disabled }) => (disabled ? '#ccc' : '#6a1f7b')};
    }
`;