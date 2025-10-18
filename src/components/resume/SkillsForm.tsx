import { ResumeData } from '@/types/resume';

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const inputClass = "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white";
const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";

export default function SkillsForm({ data, setData }: Props) {
  const updateField = (field: string, value: string) => {
    setData(prev => ({
      ...prev,
      technicalSkills: { ...prev.technicalSkills, [field]: value }
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technical Skills</h2>

      <div>
        <label className={labelClass}>Programming Languages</label>
        <input
          type="text"
          value={data.technicalSkills.programmingLanguages}
          onChange={(e) => updateField('programmingLanguages', e.target.value)}
          className={inputClass}
          placeholder="C, C++, Python, JavaScript, SQL"
        />
      </div>

      <div>
        <label className={labelClass}>Frameworks / Libraries</label>
        <input
          type="text"
          value={data.technicalSkills.frameworks}
          onChange={(e) => updateField('frameworks', e.target.value)}
          className={inputClass}
          placeholder="React.js, Next.js, Node.js, Express.js, TensorFlow, PyTorch"
        />
      </div>

      <div>
        <label className={labelClass}>Databases / Cloud</label>
        <input
          type="text"
          value={data.technicalSkills.databases}
          onChange={(e) => updateField('databases', e.target.value)}
          className={inputClass}
          placeholder="MongoDB, PostgreSQL, Firebase, Redis"
        />
      </div>

      <div>
        <label className={labelClass}>Developer Tools</label>
        <input
          type="text"
          value={data.technicalSkills.developerTools}
          onChange={(e) => updateField('developerTools', e.target.value)}
          className={inputClass}
          placeholder="Git, Docker, Postman, VSCode, Jupyter Notebook"
        />
      </div>

      <div>
        <label className={labelClass}>Relevant Coursework</label>
        <input
          type="text"
          value={data.technicalSkills.coursework}
          onChange={(e) => updateField('coursework', e.target.value)}
          className={inputClass}
          placeholder="Data Structures, Algorithms, DBMS, Machine Learning"
        />
      </div>
    </div>
  );
}
