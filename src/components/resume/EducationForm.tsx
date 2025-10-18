import { ResumeData, Education } from '@/types/resume';

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const inputClass = "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white";
const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";
const addButtonClass = "px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors";
const deleteButtonClass = "px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition-colors";

export default function EducationForm({ data, setData }: Props) {
  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      score: '',
      scoreType: 'CGPA',
      startYear: '',
      endYear: ''
    };
    setData(prev => ({
      ...prev,
      education: [...prev.education, newEdu]
    }));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id: string) => {
    setData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h2>
        <button onClick={addEducation} className={addButtonClass}>
          + Add Education
        </button>
      </div>

      {data.education.map((edu, index) => (
        <div key={edu.id} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Education #{index + 1}</h3>
            <button onClick={() => removeEducation(edu.id)} className={deleteButtonClass}>
              Remove
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className={labelClass}>Institution Name</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                className={inputClass}
                placeholder="Indian Institute Of Information Technology, Bhagalpur"
              />
            </div>

            <div>
              <label className={labelClass}>Degree</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                className={inputClass}
                placeholder="Bachelor of Technology (B.Tech)"
              />
            </div>

            <div>
              <label className={labelClass}>Field of Study</label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                className={inputClass}
                placeholder="Computer Science and Engineering"
              />
            </div>

            <div>
              <label className={labelClass}>Score Type</label>
              <select
                value={edu.scoreType}
                onChange={(e) => updateEducation(edu.id, 'scoreType', e.target.value)}
                className={inputClass}
              >
                <option value="CGPA">CGPA</option>
                <option value="Percentage">Percentage</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Score</label>
              <input
                type="text"
                value={edu.score}
                onChange={(e) => updateEducation(edu.id, 'score', e.target.value)}
                className={inputClass}
                placeholder="7.59 or 91.8"
              />
            </div>

            <div>
              <label className={labelClass}>Start Year</label>
              <input
                type="text"
                value={edu.startYear}
                onChange={(e) => updateEducation(edu.id, 'startYear', e.target.value)}
                className={inputClass}
                placeholder="2022"
              />
            </div>

            <div>
              <label className={labelClass}>End Year</label>
              <input
                type="text"
                value={edu.endYear}
                onChange={(e) => updateEducation(edu.id, 'endYear', e.target.value)}
                className={inputClass}
                placeholder="2026"
              />
            </div>
          </div>
        </div>
      ))}

      {data.education.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          No education entries yet. Click "Add Education" to get started.
        </div>
      )}
    </div>
  );
}
