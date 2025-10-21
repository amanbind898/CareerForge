import { ResumeData, Certification } from '@/types/resume';

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const inputClass = "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white";
const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";
const addButtonClass = "px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors";
const deleteButtonClass = "px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition-colors";

export default function CertificationsForm({ data, setData }: Props) {
  const addCertification = () => {
    const newCert: Certification = {
      id: Date.now().toString(),
      title: '',
      link: ''
    };
    setData(prev => ({
      ...prev,
      certifications: [...prev.certifications, newCert]
    }));
  };

  const updateCertification = (id: string, field: keyof Certification, value: string) => {
    setData(prev => ({
      ...prev,
      certifications: prev.certifications.map(cert =>
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    }));
  };

  const removeCertification = (id: string) => {
    setData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(cert => cert.id !== id)
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Certifications</h2>
        <button onClick={addCertification} className={addButtonClass}>
          + Add Certification
        </button>
      </div>

      {data.certifications.map((cert, index) => (
        <div key={cert.id} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Certification #{index + 1}</h3>
            <button onClick={() => removeCertification(cert.id)} className={deleteButtonClass}>
              Remove
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className={labelClass}>Certification Title</label>
              <input
                type="text"
                value={cert.title}
                onChange={(e) => updateCertification(cert.id, 'title', e.target.value)}
                className={inputClass}
                placeholder="Kaggle — Intro to Machine Learning"
              />
            </div>

            <div>
              <label className={labelClass}>Credential Link</label>
              <input
                type="url"
                value={cert.link}
                onChange={(e) => updateCertification(cert.id, 'link', e.target.value)}
                className={inputClass}
                placeholder="Click &quot;Add Certification&quot; to add your first certification"
              />
            </div>
          </div>
        </div>
      ))}

      {data.certifications.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          No certifications yet. Click &quot;Add Certification&quot; to get started.
        </div>
      )}
    </div>
  );
}
