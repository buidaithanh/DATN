import React from 'react';
import Header from '../components/Header';
import "../styles/Profile.scss";
const Profile = () => {
  return (
    <>
      <Header />
      <div className=' group-profile'>
        <div className='profile-user'>
          <div className="user">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                <img
                  src="/png/Avatar.png" // Replace this with the actual avatar image URL.
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <button className="text-blue-500 hover:underline">Cập nhật Avatar</button>
          </div>
          <div className="list-group">

            <div className="bg-white border rounded text-title-darker hover:text-white hover:bg-primary
             ">
              <a href="">
                <p className="px-2.5 py-3">
                  <svg xmlns="" fill="none" viewBox="0 0 32 32" strokeWidth="2" stroke="currentColor" width="32" height="32" className="w-6 h-6 mr-1 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 27h16m-10-4v4m4-4v4M4.5 23h23a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 27.5 5h-23A1.5 1.5 0 0 0 3 6.5v15A1.5 1.5 0 0 0 4.5 23z"></path></svg>
                  Quản lí tài khoản
                </p>
              </a>
            </div>

            <div className="bg-white border rounded text-title-darker hover:text-white hover:bg-primary
             ">
              <a href="">
                <p className="px-2.5 py-3">
                  <svg xmlns="" fill="none" viewBox="0 0 32 32" strokeWidth="2" stroke="currentColor" width="32" height="32" className="w-6 h-6 mr-1 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 10V8.144c0-1.513 1.127-2.797 2.635-2.923.497-.04.997-.076 1.497-.107M21 24h3a3 3 0 0 0 3-3V8.144c0-1.513-1.127-2.797-2.635-2.923a64.565 64.565 0 0 0-1.497-.107M21 25v-2.5a4.5 4.5 0 0 0-4.5-4.5h-2a1.5 1.5 0 0 1-1.5-1.5v-2A4.5 4.5 0 0 0 8.5 10H7m15.867-4.885A3.001 3.001 0 0 0 20 3h-2a3.001 3.001 0 0 0-2.867 2.115m7.733 0c.087.28.133.577.133.885v1h-8V6c0-.308.047-.605.133-.885M9 10H6.5A1.5 1.5 0 0 0 5 11.5v16A1.5 1.5 0 0 0 6.5 29h13a1.5 1.5 0 0 0 1.5-1.5V22A12 12 0 0 0 9 10z"></path></svg>
                  Quản lý tài liệu
                </p>
              </a>
            </div>

            <div className="bg-white border rounded text-title-darker hover:text-white hover:bg-primary
         ">
              <a href="">
                <p className="px-2.5 py-3">
                  <svg xmlns="" fill="none" viewBox="0 0 32 32" strokeWidth="2" stroke="currentColor" width="32" height="32" className="w-6 h-6 mr-1 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v16m-4-3.757 1.172.879c1.561 1.172 4.093 1.172 5.656 0 1.563-1.172 1.563-3.071 0-4.243C18.048 16.292 17.024 16 16 16c-.967 0-1.933-.293-2.671-.879-1.475-1.172-1.475-3.071 0-4.243s3.867-1.172 5.341 0l.553.44M28 16a12 12 0 1 1-24 0 12 12 0 0 1 24 0z"></path></svg>
                  Quản lý tài chính
                </p>
              </a>
            </div>

            <div className="bg-white border rounded text-title-darker hover:text-white hover:bg-primary
         !text-white !bg-primary">
              <a href="">
                <p className="px-2.5 py-3">
                  <svg xmlns="" fill="none" viewBox="0 0 32 32" strokeWidth="2" stroke="currentColor" width="32" height="32" className="w-6 h-6 mr-1 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M23.976 24.967A9.984 9.984 0 0 0 16 21a9.984 9.984 0 0 0-7.976 3.967m15.951 0a12 12 0 1 0-15.951 0m15.951 0A11.955 11.955 0 0 1 16 28a11.955 11.955 0 0 1-7.976-3.033M20 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path></svg>
                  Settings
                </p>
              </a>
            </div>

            <div className="bg-white border rounded text-title-darker hover:text-white hover:bg-primary
         ">
              <a href="">
                <p className="px-2.5 py-3">
                  <svg xmlns="" fill="none" viewBox="0 0 32 32" strokeWidth="2" stroke="currentColor" width="32" height="32" className="w-6 h-6 mr-1 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.809 22.776a31.797 31.797 0 0 0 7.272-1.747A11.956 11.956 0 0 1 24 13v-1a8 8 0 0 0-16 0v1a11.956 11.956 0 0 1-3.083 8.029 31.83 31.83 0 0 0 7.273 1.747m7.619 0a32.34 32.34 0 0 1-7.619 0m7.619 0a4 4 0 1 1-7.619 0"></path></svg>
                  Thông báo
                </p>
              </a>
            </div>
            <div className="bg-white border rounded text-title-darker hover:text-white hover:bg-primary">
              <a href="">
                <p className="px-2.5 py-3">Log out
                </p>
              </a>
            </div>

            <div className="mt-6 hidden w-full overflow-hidden md:block">
              <i className="icon ad-user-image"></i>
            </div>

          </div>
        </div>
        <div className='form-user'>
          
            <div className="container">
              <div className="form-group">
                <input type="button" value="Tài Khoản" />
                <input type="button" value="Bảo Mật" />
                <input type="button" value="Tài Liệu" />
              </div>

              <div className="form-group">
                <span className="info-label" 
                  onClick={()=> alert('Thông tin chung')}
                >Thông tin chung</span>
              </div>

              <div className="form-group">
                <label htmlFor="fullname">Full Name:</label>
                <input type="text" id="fullname" name="fullname" />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth:</label>
                <select id="dob-day" name="dob-day">
                  <option value="day">Day</option>

                </select>
                <select id="dob-month" name="dob-month">
                  <option value="month">Month</option>

                </select>
                <select id="dob-year" name="dob-year">
                  <option value="year">Year</option>

                </select>
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <div className="gender">
                  <input type="radio" id="male" name="gender" />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="gender">
                  <input type="radio" id="female" name="gender" />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <select id="address" name="address">
                  <option value="danang">Đà Nẵng</option>
                  <option value="hanoi">Hà Nội</option>
                  <option value="hcm">Hồ Chí Minh</option>

                </select>
              </div>
              <div className="form-group">
                <label htmlFor="job">Ngành nghề:</label>
                <select id="job" name="job">
                  <option value="frontend">Front End</option>
                  <option value="backend">Back End</option>
                  <option value="other">Làm Đĩ</option>

                </select>
              </div>
              <div className="form-group">
                <span className="info-label" onClick={()=>alert('Thông tin liên hệ')}>Thông tin liên hệ</span>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone" />
              </div>
              <button className='btn-update'> Cập Nhật </button>
            </div>
          </div>
          
        
      </div>

    </>
  );
};
export default Profile