import React, { useState } from 'react';
import '../css/StudentApplyAdmission.css'; // Import your CSS file
import DemoImg  from "../img/nobody.png";
import DemoSig from "../img/sample_sig.jpg";

export const StudentApplyAdmission = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    admissionFor: '',
    admissionGroup: '',
    studentFirstName: '',
    studentLastName: '',
    studentEmail: '',
    studentPhoneNumber: '',
    studentImage: DemoImg, // You may use a file input for images
    studentSignature: DemoSig, // You may use a file input for signatures
    studentGender: '',
    studentReligion: '',
    studentNationality: '',
    birthDate: '',
    birthCertificateNumber: '',
    fatherName: '',
    fatherNID: '',
    fatherPhoneNumber: '',
    fatherOccupation: '',
    fatherReligion: '',
    fatherMonthlyIncome: '',
    fatherNationality: '',
    motherName: '',
    motherNID: '',
    motherPhoneNumber: '',
    motherOccupation: '',
    motherReligion: '',
    motherMonthlyIncome: '',
    motherNationality: '',
    presentAddressLine1: '',
    presentAddressLine2: '',
    presentZila: '',
    presentThana: '',
    presentPostalCode: '',
    permanentAddressLine1: '',
    permanentAddressLine2: '',
    permanentZila: '',
    permanentThana: '',
    permanentPostalCode: '',
    previousClass: '',
    previousClassGroup: '',
    previousClassResultTotalMark: '',
    previousClassResultGPA: '',
    previousSchoolName: '',
    previousSchoolClassRoll: '',
  });

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, type, files } = e.target;
  
    if (type === "file" && files) {
      const file = files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onloadend = () => {
          setFormData({
            ...formData,
            [name]: reader.result,
          });
        };
  
        reader.readAsDataURL(file);
      }
    } else {
      // For other input types (text, etc.)
      setFormData({
        ...formData,
        [name]: e.target.value,
      });
    }
  };
  

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission logic (e.g., send data to backend)
    console.log('Form submitted:', formData);
  };

  return (
    
    <div className="student-admission-container">
      <h1 className='title-1'>Apply For Student Admission</h1>
      <form className="student-admission-form" onSubmit={handleSubmit}>
        

        {/* Admission Information */}
        <div className="admission-info">
          <h2 className='title-2'>Admission Information</h2>

          <div className='admission-form-col'>
            <div className='admission-form-row'>
              <div className='admission-form-info'>
                <label>Admission for <strong>*</strong> </label>
                <select name="admissionFor" value={formData.admissionFor} onChange={handleInputChange} required >
                  <option disabled value="Class1">Select</option>
                  <option value="Class1">Class 1</option>
                  <option value="Class2">Class 2</option>
                </select>
              </div>
              <div className='admission-form-info'>
                <label>Admission Group <strong>*</strong> </label>
                <select name="admissionGroup" value={formData.admissionGroup} onChange={handleInputChange} required >
                  <option disabled value="Science">Select</option>
                  <option value="science">Science</option>
                  <option value="arts">Arts</option>
                  <option value="commerce">Commerce</option>
                  <option value="general">General</option>
                </select>
              </div>
            </div>
          </div>

        </div>


        {/* Personal Information */}
        <div className="personal-info">
          <h2 className='title-2'>Personal Information</h2>

          <div className="admission-form-col">
            <div className="admission-form-row">

              <div className='admission-form-info'>
                <label>Student Image <strong>*</strong> </label>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  name="studentImage"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='admission-form-info'>
                <img className='student-image' src={formData.studentImage} alt="studentImage" />
              </div>
              
            </div>
          </div>

          <div className="admission-form-col">
            <div className="admission-form-row">

              <div className='admission-form-info'>
                <label>Student Signature <strong>*</strong> </label>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  name="studentSignature"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='admission-form-info'>
                <img className='student-signature' src={formData.studentSignature} alt="studentSignature" />
              </div>
              
            </div>
          </div>

          <div className="admission-form-col">
            <div className="admission-form-row">

              <div className='admission-form-info'>
                <label>First Name <strong>*</strong></label>
                <input
                  type="text"
                  name="studentFirstName"
                  value={formData.studentFirstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <dv className='admission-form-info'>
                <label>Last Name <strong>*</strong></label>
                <input
                  type="text"
                  name="studentLastName"
                  value={formData.studentLastName}
                  onChange={handleInputChange}
                  required
                />
              </dv>
              <div className='admission-form-info'>
                <label>Student E-mail address <strong>*</strong></label>
                <input
                  type="email"
                  name="studentEmail"
                  value={formData.studentEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>

            </div>
          </div>

          <div className="admission-form-col">
            <div className="admission-form-row">

              <div className='admission-form-info'>
                <label>Student Phone Number <strong>*</strong></label>
                <input
                  type="tel"
                  name="studentPhoneNumber"
                  value={formData.studentPhoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='admission-form-info'>
                <label>Gender <strong>*</strong></label>
                <select
                  name="studentGender"
                  value={formData.studentGender}
                  onChange={handleInputChange}
                  required
                  >
                  <option disabled value="Class1">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="tiktoker">Tiktoker</option>
                </select>
              </div>
              <div className='admission-form-info'>
                <label>Religon <strong>*</strong> </label>
                <select
                  name="studentReligon"
                  value={formData.studentReligon}
                  onChange={handleInputChange}
                  required
                  >
                  <option disabled value="Class1">Select</option>
                  <option value="islam">Islam</option>
                  <option value="christianity">Christianity</option>
                  <option value="buddhism">Buddhism</option>
                  <option value="hinduism">Hinduism</option>
                </select>
              </div>
            </div>
          </div>

          <div className="admission-form-col">
            <div className="admission-form-row">

              <div className='admission-form-info'>
                <label> Birth Date <strong>*</strong></label>
                <input
                  type="date"
                  name="studentBirthDate"
                  value={formData.studentBirthDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='admission-form-info'>
                <label>Birth Certificate Number <strong>*</strong></label>
                <input
                  type="number"
                  name="birthCertificateNumber"
                  value={formData.birthCertificateNumber}
                  onChange={handleInputChange}
                  min="0" // Set the minimum value to 0 to ensure it's a positive number
                  required
                />
              </div>
              <div className='admission-form-info'>
                <label>Nationality <strong>*</strong> </label>
                <select
                  name="studentNationality"
                  value={formData.studentNationality}
                  onChange={handleInputChange}
                  required
                  >
                  <option disabled value="Class1">Select</option>
                  <option value="bangladeshi">Bangladeshi</option>
                </select>
              </div>
            </div>
          </div>

        </div>


        {/* Parents Information */}
        <div className="parents-info">
          <h2 className='title-2'>Perantal Information</h2>

          <div className="father-info">
            <h3 className='title-3'>Father's Information</h3>
            
            <div className="admission-form-col">
              <div className="admission-form-row">

                <div className='admission-form-info'>
                  <label>Father's Name <strong>*</strong> </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="admission-form-info">
                  <label>Father's NID <strong>*</strong> </label>
                  <input 
                    type='number'
                    name='fatherNID'
                    value={formData.fatherNID}
                    onChange={handleInputChange}
                    min="0" // Set the minimum value to 0 to ensure it's a positive number
                    required
                  />
                </div>
                <div className='admission-form-info'>
                  <label>Father's Phone Number <strong>*</strong></label>
                  <input
                    type="tel"
                    name="fatherPhoneNumber"
                    value={formData.fatherPhoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>

              </div>
            </div>

            <div className="admission-form-col">
              <div className="admission-form-row">

                <div className='admission-form-info'>
                  <label>Father's Occupation <strong>*</strong> </label>
                  <input
                    type="text"
                    name="fatherOccupation"
                    value={formData.fatherOccupation}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="admission-form-info">
                  <label>Father's Religion <strong>*</strong> </label>
                  <select name="fatherReligon" id="fatherReligion" value={formData.fatherReligion} onChange={handleInputChange} required>
                    <option disabled >Select</option>
                    <option value="islam">Islam</option>
                    <option value="christianity">Christianity</option>
                    <option value="buddhism">Buddhism</option>
                    <option value="hinduism">Hinduism</option>
                  </select>
                </div>
                <div className='admission-form-info'>
                  <label>Father's NID <strong>*</strong> </label>
                  <input 
                    type='number'
                    name='fatherMonthlyIncome'
                    value={formData.fatherMonthlyIncome}
                    onChange={handleInputChange}
                    min="0" // Set the minimum value to 0 to ensure it's a positive number
                    required
                  />
                </div>
                
              </div>
            </div>

            <div className="admission-form-col">
              <div className="admission-form-row">

                <div className="admission-form-info">
                  <label>Father's Nationality <strong>*</strong> </label>
                  <select name="fatherNationality" id="fatherNationality" value={formData.fatherNationality} onChange={handleInputChange} required>
                    <option disabled >Select</option>
                    <option value="bangladeshi">Bangladeshi</option>
                  </select>
                </div>
                
              </div>
            </div>

          </div>

          <div className="mother-info">
            <h3 className='title-3'>Mother's Information</h3>
            
            <div className="admission-form-col">
              <div className="admission-form-row">
                
                <div className='admission-form-info'>
                  <label>Mother's Name <strong>*</strong> </label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="admission-form-info">
                  <label>Mother's NID </label>
                  <input 
                    type='number'
                    name='motherNID'
                    value={formData.motherNID}
                    onChange={handleInputChange}
                    min="0" // Set the minimum value to 0 to ensure it's a positive number
                    required
                  />
                </div>
                <div className='admission-form-info'>
                  <label>Mother's Phone Number <strong>*</strong></label>
                  <input
                    type="tel"
                    name="motherPhoneNumber"
                    value={formData.motherPhoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>

              </div>
            </div>

            <div className="admission-form-col">
              <div className="admission-form-row">

                <div className='admission-form-info'>
                  <label>Mother's Occupation <strong>*</strong> </label>
                  <input
                    type="text"
                    name="motherOccupation"
                    value={formData.motherOccupation}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="admission-form-info">
                  <label>Mother's Religion <strong>*</strong> </label>
                  <select name="motherReligon" id="fatherReligion" value={formData.motherReligion} onChange={handleInputChange} required>
                    <option disabled >Select</option>
                    <option value="islam">Islam</option>
                    <option value="christianity">Christianity</option>
                    <option value="buddhism">Buddhism</option>
                    <option value="hinduism">Hinduism</option>
                  </select>
                </div>
                <div className='admission-form-info'>
                  <label>Mother's NID <strong>*</strong> </label>
                  <input 
                    type='number'
                    name='motherMonthlyIncome'
                    value={formData.motherMonthlyIncome}
                    onChange={handleInputChange}
                    min="0" // Set the minimum value to 0 to ensure it's a positive number
                    required
                  />
                </div>
                
              </div>
            </div>

            <div className="admission-form-col">
              <div className="admission-form-row">

                <div className="admission-form-info">
                  <label>Mother's Nationality <strong>*</strong> </label>
                  <select name="motherNationality" id="mother-nationality" value={formData.motherNationality} onChange={handleInputChange} required>
                    <option disabled >Select</option>
                    <option value="bangladeshi">Bangladeshi</option>
                  </select>
                </div>
                
              </div>
            </div>

          </div>

        </div>


        {/* Address Information */}
        <div className="address-info">
          <h2 className='title-2'>Address Information</h2>

          <div className="present-address-info">
            <h3 className='title-3'>Present Address</h3>
            
            <div className="admission-form-col">
              <div className="admission-form-row">

                <div className='admission-form-info'>
                  <label>Address Line 1 <strong>*</strong> </label>
                  <input
                    type="text"
                    name="presentAddressLine1"
                    value={formData.presentAddressLine1}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='admission-form-info'>
                  <label>Address Line 2 </label>
                  <input
                    type="text"
                    name="presentAddressLine2"
                    value={formData.presentAddressLine2}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='admission-form-info'>
                  <label>Zila <strong>*</strong> </label>
                  <input
                    type="text"
                    name="presentZila"
                    value={formData.presentZila}
                    onChange={handleInputChange}
                    required
                  />
                </div>

              </div>
            </div>

            <div className="admission-form-col">
              <div className="admission-form-row">

                <div className='admission-form-info'>
                  <label>Thana <strong>*</strong> </label>
                  <input
                    type="text"
                    name="presentThana"
                    value={formData.presentThana}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='admission-form-info'>
                  <label>Postal Code <strong>*</strong> </label>
                  <input
                    type="number"
                    name="presentPostalCode"
                    value={formData.presentPostalCode}
                    onChange={handleInputChange}
                    min="0" // Set the minimum value to 0 to ensure it's a positive number
                  />
                </div>

              </div>
            </div>

          </div>

          <div className="permanent-address-info">
            <h3 className='title-3'>Permanent Address</h3>
            
            <div className="admission-form-col">
              <div className="admission-form-row">

                <div className='admission-form-info'>
                  <label>Address Line 1 <strong>*</strong> </label>
                  <input
                    type="text"
                    name="permanentAddressLine1"
                    value={formData.permanentAddressLine1}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='admission-form-info'>
                  <label>Address Line 2 </label>
                  <input
                    type="text"
                    name="permanentAddressLine2"
                    value={formData.permanentAddressLine2}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='admission-form-info'>
                  <label>Zila <strong>*</strong> </label>
                  <input
                    type="text"
                    name="permanentZila"
                    value={formData.permanentZila}
                    onChange={handleInputChange}
                    required
                  />
                </div>

              </div>
            </div>

            <div className="admission-form-col">
              <div className="admission-form-row">

                <div className='admission-form-info'>
                  <label>Thana <strong>*</strong> </label>
                  <input
                    type="text"
                    name="permanentThana"
                    value={formData.permanentThana}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='admission-form-info'>
                  <label>Postal Code <strong>*</strong> </label>
                  <input
                    type="number"
                    name="permanentPostalCode"
                    value={formData.permanentPostalCode}
                    onChange={handleInputChange}
                    min="0" // Set the minimum value to 0 to ensure it's a positive number
                  />
                </div>

              </div>
            </div>

          </div>

        </div>


        {/* Previous Academic Information */}
        <div className="previous-academic-info">
          <h2>Previous Academic Information</h2>

          <div className="admission-form-col">
            <div className="admission-form-row">

              <div className='admission-form-info'>
                <label>Previous Class <strong>*</strong> </label>
                <input
                  type="text"
                  name="previousClass"
                  value={formData.previousClass}
                  onChange={handleInputChange}
                />
              </div>
              <div className='admission-form-info'>
                <label>Previous Class Group <strong>*</strong> </label>
                <select
                  
                  name="previousClassGroup"
                  value={formData.previousClassGroup}
                  onChange={handleInputChange}
                  required
                  >
                  <option disabled>Select</option>
                  <option value="science">Science</option>
                  <option value="arts">Arts</option>
                  <option value="commerce">Commerce</option>
                  <option value="general">General</option>
                </select>
              </div>
              <div className='admission-form-info'>
                <label>Previous Class Result (Total Marks) </label>
                <input
                  type="number"
                  name="previousClassResultTotalMark"
                  value={formData.previousClassResultTotalMark}
                  onChange={handleInputChange}
                  min="0" // Set the minimum value to 0 to ensure it's a positive number
                />
              </div>

            </div>
          </div>

          <div className="admission-form-col">
            <div className="admission-form-row">

              <div className='admission-form-info'>
                <label>Previous Class Result (GPA) <strong>*</strong> </label>
                <input
                  type="number"
                  name="previousClassResultGPA"
                  value={formData.previousClassResultGPA}
                  onChange={handleInputChange}
                  required
                  min="0" // Set the minimum value to 0 to ensure it's a positive number
                />
              </div>
              <div className='admission-form-info'>
                <label>Previous School Name <strong>*</strong> </label>
                <input
                  type="text"
                  name="previousSchoolName"
                  value={formData.previousSchoolName}
                  onChange={handleInputChange}
                  required
                />
              </div> 
              <div className='admission-form-info'>
                <label>Previous School Class Roll <strong>*</strong> </label>
                <input
                  type="text"
                  name="previousSchoolClassRoll"
                  value={formData.previousSchoolClassRoll}
                  onChange={handleInputChange}
                  required
                />
              </div>

            </div>
          </div>

        </div>
        

        {/* Submit Button */}
        <div className="submit-button">
          <button type="submit">Apply</button>
        </div>


      </form>
    </div>
  );
};
  