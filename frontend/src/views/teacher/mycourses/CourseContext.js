import React, { useState } from 'react';
import AddLecture from './AddLecture';
import CreateCourse from './CreateCourse';

function ParentComponent() {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({});

    const handleNextStep = () => {
        setActiveStep(prevStep => prevStep + 1);
    };

    const updateFormData = (newData) => {
        setFormData(prev => ({ ...prev, ...newData }));
    };

    return (
        <div>
            {activeStep === 0 && <AddLecture updateFormData={updateFormData} handleNextStep={handleNextStep} />}
            {activeStep === 1 && <CreateCourse formData={formData} />}
        </div>
    );
}

export default ParentComponent;