if ("lock_device".equals(action)) {
    mDevicePolicyManager.lockNow(); // Mengunci perangkat
} else if ("unlock_device".equals(action)) {
    // Tidak ada cara langsung untuk membuka pola, tetapi Anda bisa menghapus kunci layar jika perangkat mendukungnya.
    mDevicePolicyManager.resetPassword("", 0); // Menghapus pola atau PIN
}
