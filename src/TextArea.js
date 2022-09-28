import React from "react";

const TextArea = ({ value, id, label, onChange }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <textarea
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                onFocus={(event) =>
                    event.target.parentElement.classList.add("focused")
                }
                onBlur={(event) =>
                    event.target.parentElement.classList.remove("focused")
                }
            ></textarea>
        </>
    );
};

export default TextArea;
