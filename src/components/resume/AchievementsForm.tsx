import { ResumeData, Achievement } from '@/types/resume';

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const inputClass = "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white";
const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";
const addButtonClass = "px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors";
const deleteButtonClass = "px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition-colors";

export default function AchievementsForm({ data, setData }: Props) {
  const addAchievement = () => {
    const newAch: Achievement = {
      id: Date.now().toString(),
      title: '',
      description: '',
      year: ''
    };
    setData(prev => ({
      ...prev,
      achievements: [...prev.achievements, newAch]
    }));
  };

  const updateAchievement = (id: string, field: keyof Achievement, value: string) => {
    setData(prev => ({
      ...prev,
      achievements: prev.achievements.map(ach =>
        ach.id === id ? { ...ach, [field]: value } : ach
      )
    }));
  };

  const removeAchievement = (id: string) => {
    setData(prev => ({
      ...prev,
      achievements: prev.achievements.filter(ach => ach.id !== id)
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Achievements</h2>
        <button onClick={addAchievement} className={addButtonClass}>
          + Add Achievement
        </button>
      </div>

      {data.achievements.map((ach, index) => (
        <div key={ach.id} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Achievement #{index + 1}</h3>
            <button onClick={() => removeAchievement(ach.id)} className={deleteButtonClass}>
              Remove
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className={labelClass}>Achievement Title</label>
              <input
                type="text"
                value={ach.title}
                onChange={(e) => updateAchievement(ach.id, 'title', e.target.value)}
                className={inputClass}
                placeholder="Problem Solving"
              />
            </div>

            <div>
              <label className={labelClass}>Year (Optional)</label>
              <input
                type="text"
                value={ach.year}
                onChange={(e) => updateAchievement(ach.id, 'year', e.target.value)}
                className={inputClass}
                placeholder="2024"
              />
            </div>

            <div className="md:col-span-3">
              <label className={labelClass}>Description</label>
              <textarea
                value={ach.description}
                onChange={(e) => updateAchievement(ach.id, 'description', e.target.value)}
                className={inputClass}
                rows={3}
                placeholder="Solved 800+ problems across CodeChef, GeeksforGeeks, LeetCode, and Codeforces"
              />
            </div>
          </div>
        </div>
      ))}

      {data.achievements.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          No achievements yet. Click "Add Achievement" to get started.
        </div>
      )}
    </div>
  );
}
