import { User, Settings, Key, Mail, HelpCircle, Bell, Lock, UserCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
    const navigate = useNavigate()


    const handleChangePasswordClick = () => {
      console.log("Logout clicked");
      // Çıkış işlemi yapılabilir
    navigate('/profile/change-password')

    };

     // Tıklama işlemleri için fonksiyonlar
  const handleSettingsClick = () => {
    console.log("Settings clicked");
    navigate('/profile/setting')
    // Burada ayar sayfasına yönlendirme işlemi yapılabilir
  };

  const handleNotificationClick = () => {
    console.log("Notification clicked");
    // Bildirimler sayfasına yönlendirme yapılabilir
  };

  const handleLogoutClick = () => {
    console.log("Logout clicked");
    // Çıkış işlemi yapılabilir
  };
  
  return (
    <div className="w-full bg-gray-800 text-gray-200 p-0 sm:p-4">
      <div className="mx-auto bg-gray-900 sm:rounded-xl shadow-lg p-6">
        <div className="flex justify-center items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-4xl text-white font-bold">
            A
          </div>
        </div>
        <h2 className="text-center text-2xl font-semibold text-gray-300">Admin Profile</h2>

        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700 cursor-pointer">
            <User className="w-6 h-6 text-green-500" />
            <div>
              <p className="text-lg font-medium">Admin Name</p>
              <p className="text-sm text-gray-400">John Doe</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700 cursor-pointer">
            <Mail className="w-6 h-6 text-blue-500" />
            <div>
              <p className="text-lg font-medium">Email</p>
              <p className="text-sm text-gray-400">john.doe@example.com</p>
            </div>
          </div>

          <div 
          onClick={handleChangePasswordClick}
          className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700 cursor-pointer">
            <Lock className="w-6 h-6 text-red-500" />
            <div>
              <p className="text-lg font-medium">Password</p>
              <p className="text-sm text-gray-400">Change your password</p>
            </div>
          </div>

          <div 
          onClick={handleSettingsClick}
          className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700 cursor-pointer">
            <Settings className="w-6 h-6 text-purple-500" />
            <div>
              <p className="text-lg font-medium">Settings</p>
              <p className="text-sm text-gray-400">Adjust your preferences</p>
            </div>
          </div>

          <div 
          onClick={handleNotificationClick}
          
          className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700 cursor-pointer">
            <Bell className="w-6 h-6 text-yellow-500" />
            <div>
              <p className="text-lg font-medium">Notifications</p>
              <p className="text-sm text-gray-400">Manage your alerts</p>
            </div>
          </div>

          <div
          
          
          className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700 cursor-pointer">
            <UserCheck className="w-6 h-6 text-teal-500" />
            <div>
              <p className="text-lg font-medium">User Management</p>
              <p className="text-sm text-gray-400">Manage roles and permissions</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700 cursor-pointer">
            <HelpCircle className="w-6 h-6 text-orange-500" />
            <div>
              <p className="text-lg font-medium">Help Center</p>
              <p className="text-sm text-gray-400">Get assistance</p>
            </div>
          </div>
        </div>

        <div
        onClick={handleLogoutClick}
        className="mt-6 flex justify-center">
          <button className="px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
