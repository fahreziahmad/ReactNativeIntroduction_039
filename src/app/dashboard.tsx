import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Dashboard() {
  const router = useRouter();
  const { username } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Blue Header Section */}
        <View style={styles.header}>
          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>dashboard</Text>
          </View>

          <View style={styles.greetingRow}>
            <View>
              <Text style={styles.helloText}>Hello {username || 'Guest'},</Text>
              <Text style={styles.greetingText}>Book your next Flight</Text>
            </View>
            <Image 
              source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} 
              style={styles.avatar} 
            />
          </View>

          {/* Trip Type Selector */}
          <View style={styles.tripTypeContainer}>
            <TouchableOpacity style={[styles.tripTypeButton, styles.tripTypeActive]}>
              <Text style={[styles.tripTypeText, styles.tripTypeTextActive]}>Round Trip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tripTypeButton}>
              <Text style={styles.tripTypeText}>One way</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tripTypeButton}>
              <Text style={styles.tripTypeText}>Multi city</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Flight Search Card */}
        <View style={styles.searchCard}>
          <Text style={styles.label}>From (Location)</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} value="New York (NYC)" editable={false} />
          </View>

          <Text style={styles.label}>To (Destination)</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} value="London (LDN)" editable={false} />
          </View>

          <View style={styles.dateRow}>
            <View style={styles.dateInputContainer}>
              <Text style={styles.label}>Departure</Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.input} value="Dec 4th, 2021" editable={false} />
              </View>
            </View>
            <View style={styles.dateInputContainer}>
              <Text style={styles.label}>Return</Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.input} value="Dec 16th, 2021" editable={false} />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search flights</Text>
          </TouchableOpacity>
        </View>

        {/* Popular Place Section */}
        <View style={styles.popularSection}>
          <Text style={styles.popularTitle}>Popular place</Text>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }} 
            style={styles.popularImage} 
          />
        </View>
      </ScrollView>

      {/* Floating Bottom Nav */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
            <Text style={styles.navIconActive}>🏠</Text>
            <Text style={styles.navTextActive}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>🎫</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>🚪</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    paddingBottom: 100, // Space for bottom nav
  },
  header: {
    backgroundColor: '#3b82f6', // Blue background
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    marginRight: 16,
  },
  backIcon: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  greetingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  helloText: {
    color: '#bbdefb', // Light blue
    fontSize: 16,
    marginBottom: 4,
  },
  greetingText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  tripTypeContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 4,
  },
  tripTypeButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 16,
  },
  tripTypeActive: {
    backgroundColor: '#ffffff',
  },
  tripTypeText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  tripTypeTextActive: {
    color: '#3b82f6',
  },
  searchCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 24,
    marginTop: -40, // Pull up to overlap header
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 8,
    marginTop: 12,
  },
  inputContainer: {
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  input: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '600',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  dateInputContainer: {
    flex: 1,
  },
  searchButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  searchButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  popularSection: {
    padding: 24,
  },
  popularTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  popularImage: {
    width: '100%',
    height: 180,
    borderRadius: 20,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
  },
  bottomNav: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItemActive: {
    flexDirection: 'row',
    backgroundColor: '#eff6ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  navIcon: {
    fontSize: 20,
    opacity: 0.5,
  },
  navIconActive: {
    fontSize: 20,
  },
  navTextActive: {
    color: '#3b82f6',
    fontWeight: 'bold',
  },
});
