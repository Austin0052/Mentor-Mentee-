import React, { useState } from 'react';
import axios from 'axios';

const KYC = ({ onSubmit }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    usertype:'',
    name: '',
    position: '',
    company: '',
    city: '',
    overview: '',
    skills: '',
    languages: '',
    twitter: '',
    linkedin: '',
    medium: '',
    experience: [
      { position: '', company: '', startDate: '', endDate: '', description: '' }
    ],
    education: [
      { school: '', course: '', startDate: '', endDate: '' }
    ],
  });

  const handleChange = (e, section, index, field) => {
    const { value } = e.target;
    const updatedSection = formData[section].map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setFormData({ ...formData, [section]: updatedSection });
  };

  const handleAddSection = (section) => {
    const newSection = {
      experience: { position: '', company: '', startDate: '', endDate: '', description: '' },
      education: { school: '', course: '', startDate: '', endDate: '' }
    };
    setFormData({
      ...formData,
      [section]: [...formData[section], newSection[section]]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const skillsArray = formData.skills.split(',').map(skill => skill.trim()).filter(skill => skill);
    const languagesArray = formData.languages.split(',').map(language => language.trim()).filter(language => language);

    try {
      const response = await axios.post('http://localhost:5005/api/users', {
        ...formData,
        skills: skillsArray,
        languages: languagesArray,
      });

      onSubmit(response.data);
    } catch (error) {
      console.error('Error submitting data', error);
    }
    console.log('submit clicked')
  };

  const goToNextSlide = () => setCurrentSlide(currentSlide + 1);
  const goToPrevSlide = () => setCurrentSlide(currentSlide - 1);

  return (
    <div className={`${currentSlide===0 || currentSlide===1 ? 'h-screen' : 'h-screen-max'} bg-slate-200 pt-10 pr-20`} >
      <div className="h-screen-max w-full flex flex-col justify-center items-center max-w-2xl mx-auto p-6 bg-slate-100 shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6">KYC Form</h2>
      <form onSubmit={handleSubmit} className=" relative w-full m-8">
        {currentSlide === 0 && (
          <div className="space-y-4 flex flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="formStyle"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Position</label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={e => setFormData({ ...formData, position: e.target.value })}
                  className="formStyle"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                  className="formStyle"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                  className="formStyle"
                  required
                />
              </div>
              
              <div className="mb-4 col-span-2">
                <label className="block text-sm font-medium text-gray-700">Overview / Description</label>
                <textarea
                  value={formData.overview}
                  onChange={e => setFormData({ ...formData, overview: e.target.value })}
                  className="w-full h-24 resize-none p-3 border-b border-black bg-slate-100 focus:outline-none"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 1 && (
          <div className="space-y-4 flex flex-col w-full">
            <h3 className="text-xl font-semibold mb-4">Background</h3>
            <div className="mb-4 col-span-2">
              <label className="block text-sm font-medium text-gray-700">Skills (comma-separated)</label>
              <input
                type="text"
                value={formData.skills}
                onChange={e => setFormData({ ...formData, skills: e.target.value })}
                className="formStyle"
                placeholder="e.g., JavaScript, React, CSS"
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-sm font-medium text-gray-700">Languages (comma-separated)</label>
              <input
                type="text"
                value={formData.languages}
                onChange={e => setFormData({ ...formData, languages: e.target.value })}
                className="formStyle"
                placeholder="e.g., English, Spanish"
                required
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Social Media Links</h3>
            <div className="mb-4 col-span-2">
              <label className="block text-sm font-medium text-gray-700">Twitter(X)</label>
              <input
                type="url"
                value={formData.twitter}
                onChange={e => setFormData({ ...formData, twitter: e.target.value })}
                className="formStyle"
                placeholder="https://twitter.com/yourprofile"
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
                className="formStyle"
                placeholder="https://linkedin.com/in/yourprofile"
                required
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-sm font-medium text-gray-700">Medium</label>
              <input
                type="url"
                value={formData.medium}
                onChange={e => setFormData({ ...formData, medium: e.target.value })}
                className="formStyle"
                placeholder="https://linkedin.com/in/yourprofile"
                required
              />
            </div>
          </div>
        )}

        {currentSlide === 2 && (
          <div className="space-y-4 flex flex-col w-full">
            <h3 className="text-xl font-semibold mb-4">Experience and Education</h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">Experience</h4>
              {formData.experience.map((exp, index) => (
                <div key={index} className="p-4 border border-gray-300 rounded-md mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">Position</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={e => handleChange(e, 'experience', index, 'position')}
                        className="formStyle"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={e => handleChange(e, 'experience', index, 'company')}
                        className="formStyle"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">Start Date</label>
                      <input
                        type="date"
                        value={exp.startDate}
                        onChange={e => handleChange(e, 'experience', index, 'startDate')}
                        className="formStyle"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">End Date</label>
                      <input
                        type="date"
                        value={exp.endDate}
                        onChange={e => handleChange(e, 'experience', index, 'endDate')}
                        className="formStyle"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      value={exp.description}
                      onChange={e => handleChange(e, 'experience', index, 'description')}
                      className="w-full h-24 p-3 border-b border-black bg-slate-100 focus:outline-none resize-none"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddSection('experience')}
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
              >
                Add Another Experience
              </button>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">Education</h4>
              {formData.education.map((edu, index) => (
                <div key={index} className="p-4 border border-gray-300 rounded-md mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">School/College</label>
                      <input
                        type="text"
                        value={edu.school}
                        onChange={e => handleChange(e, 'education', index, 'school')}
                        className="formStyle"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">Course</label>
                      <input
                        type="text"
                        value={edu.course}
                        onChange={e => handleChange(e, 'education', index, 'course')}
                        className="formStyle"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">Start Date</label>
                      <input
                        type="date"
                        value={edu.startDate}
                        onChange={e => handleChange(e, 'education', index, 'startDate')}
                        className="formStyle"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">End Date</label>
                      <input
                        type="date"
                        value={edu.endDate}
                        onChange={e => handleChange(e, 'education', index, 'endDate')}
                        className="formStyle"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddSection('education')}
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
              >
                Add Another Education
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          {currentSlide > 0 && (
            <button
              type="button"
              onClick={goToPrevSlide}
              className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
            >
              Previous
            </button>
          )}
          {currentSlide < 2 ? (
            <button
              type="button"
              onClick={goToNextSlide}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          )}
        </div>
      </form>
      </div>
      
    </div>
  );
};

export default KYC;
