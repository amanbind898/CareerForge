import { ResumeData } from '@/types/resume';

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const inputClass = "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white";
const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";

export default function PersonalInfoForm({ data, setData }: Props) {
  const updateField = (field: string, value: string) => {
    setData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Personal Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            type="text"
            value={data.personalInfo.name}
            onChange={(e) => updateField('name', e.target.value)}
            className={inputClass}
            placeholder="Aman Kumar Bind"
          />
        </div>

        <div>
          <label className={labelClass}>Phone Number *</label>
          <input
            type="text"
            value={data.personalInfo.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className={inputClass}
            placeholder="9305832479"
          />
        </div>

        <div>
          <label className={labelClass}>Primary Email *</label>
          <input
            type="email"
            value={data.personalInfo.email1}
            onChange={(e) => updateField('email1', e.target.value)}
            className={inputClass}
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className={labelClass}>Secondary Email (Optional)</label>
          <input
            type="email"
            value={data.personalInfo.email2}
            onChange={(e) => updateField('email2', e.target.value)}
            className={inputClass}
            placeholder="secondary@example.com"
          />
        </div>

        <div>
          <label className={labelClass}>GitHub Username</label>
          <input
            type="text"
            value={data.personalInfo.github}
            onChange={(e) => updateField('github', e.target.value)}
            className={inputClass}
            placeholder="amanbind898"
          />
        </div>

        <div>
          <label className={labelClass}>LinkedIn Username</label>
          <input
            type="text"
            value={data.personalInfo.linkedin}
            onChange={(e) => updateField('linkedin', e.target.value)}
            className={inputClass}
            placeholder="amankumarbind"
          />
        </div>
      </div>
    </div>
  );
}
