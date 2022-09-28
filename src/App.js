import { useState } from "react";
import "./App.css";
import TextArea from "./TextArea";

function App() {
    const input = [
        {
            id: "examination",
            label: "Examination",
        },
        {
            id: "clinicalHistory",
            label: "Clinical History",
        },
        {
            id: "techniques",
            label: "Techniques",
        },
        {
            id: "findings",
            label: "Findings",
        },
        {
            id: "impressions",
            label: "Impressions",
        },
    ];

    const [formData, setFormData] = useState({});

    const handleTextAreaChange = ({ target: { value, name } }) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log(formData);
    };

    return (
        <div className="App">
            <h2>TODOs</h2>
            <form className="playground" onSubmit={handleFormSubmit}>
                {input.map((item) => {
                    const _classes = formData[item.id]
                        ? "row completed"
                        : "row";

                    return (
                        <div className={_classes} key={item.id}>
                            <TextArea
                                id={item.id}
                                label={item.label}
                                onChange={handleTextAreaChange}
                                value={formData[item.id]}
                            />
                        </div>
                    );
                })}
                <div className="action-center">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default App;
