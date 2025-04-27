import { CreditCard, Calendar, User, Wallet, CheckCircle, KeyRound, Edit, Trash, Lock } from 'lucide-react';

const PersonCard = ({ data, onEdit, onDelete, onBlock }) => {
  const {
    name,
    salary,
    region,
    advance,
    remainingSalary,
    startDate,
    daysWorked,
    password,
    isBlocked,
  } = data;

  return (
    <div className="w-full bg-gray-800 text-white p-6 rounded-lg shadow-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <User size={24} className="text-yellow-500" />
          {name}
        </h2>
        <div className="flex gap-3">
          <button 
            onClick={onEdit} 
            className="text-blue-500 hover:text-blue-700 p-2 rounded-full transition duration-300"
          >
            <Edit size={18} />
          </button>
          <button 
            onClick={onDelete} 
            className="text-red-500 hover:text-red-700 p-2 rounded-full transition duration-300"
          >
            <Trash size={18} />
          </button>
          <button 
            onClick={onBlock} 
            className={`text-${isBlocked ? 'gray' : 'yellow'}-500 hover:text-${isBlocked ? 'gray' : 'yellow'}-700 p-2 rounded-full transition duration-300`}
          >
            <Lock size={18} />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {/* Alan */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet size={18} className="text-blue-400" />
            <span className="text-sm font-medium">Alan:</span>
          </div>
          <span className="text-gray-300">{region}</span>
        </div>

        {/* Maaş */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard size={18} className="text-green-400" />
            <span className="text-sm font-medium">Maaş:</span>
          </div>
          <span className="text-gray-300">{salary.toLocaleString()}₺</span>
        </div>

        {/* Avans */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet size={18} className="text-red-400" />
            <span className="text-sm font-medium">Avans:</span>
          </div>
          <span className="text-gray-300">{advance.toLocaleString()}₺</span>
        </div>

        {/* Kalan Maaş */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard size={18} className="text-teal-400" />
            <span className="text-sm font-medium">Kalan Maaş:</span>
          </div>
          <span className="text-gray-300">{remainingSalary.toLocaleString()}₺</span>
        </div>

        {/* Giriş Tarihi */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-yellow-400" />
            <span className="text-sm font-medium">İşe Giriş:</span>
          </div>
          <span className="text-gray-300">{new Date(startDate).toLocaleDateString()}</span>
        </div>

        {/* Çalıştığı Gün */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-purple-400" />
            <span className="text-sm font-medium">Çalıştığı Gün:</span>
          </div>
          <span className="text-gray-300">{daysWorked} gün</span>
        </div>

        {/* Şifre */}
        {password && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <KeyRound size={18} className="text-teal-400" />
              <span className="text-sm font-medium">Şifre:</span>
            </div>
            <span className="text-gray-300">{password}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonCard;
