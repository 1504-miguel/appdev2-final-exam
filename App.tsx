import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useState } from "react";

import TodoScreen from "./screens/TodoScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

import { Id } from "./convex/_generated/dataModel";

// IMPORTANT: make sure env variable exists
const convex = new ConvexReactClient(
  process.env.EXPO_PUBLIC_CONVEX_URL as string,
  {
    unsavedChangesWarning: false,
  }
);

export default function App() {
  const [userId, setUserId] = useState<Id<"users"> | null>(null);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <ConvexProvider client={convex}>
      {userId ? (
        <TodoScreen userId={userId} />
      ) : showSignup ? (
        <SignupScreen />
      ) : (
        <LoginScreen
          onLogin={(id: Id<"users">) => setUserId(id)}
          
         
        />
      )}
    </ConvexProvider>
  );
}
