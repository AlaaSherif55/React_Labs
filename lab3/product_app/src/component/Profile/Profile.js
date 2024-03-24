import { formControlClasses } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
const Profile = () => {

    const formData = useSelector((state) => state.form.formData)
    console.log(`profile ${formData }`)
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h3 className="text-center mb-0">User Profile</h3>
          </div>
          <div className="card-body">
            <div className="text-center mb-4">
              {formData.photo && (
                <img src={formData.photo} alt="Profile" className="rounded-circle img-thumbnail" style={{ width: '150px', height: '150px' }} />
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <div>{formData.name}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <div>{formData.email}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div>*********</div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Profile;