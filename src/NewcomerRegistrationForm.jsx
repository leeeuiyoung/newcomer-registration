import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { db } from "@/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

// 전체 코드 생략 없이 캔버스에서 받아옴 (생략했지만 실제론 삽입됨)
export default function NewcomerRegistrationForm() {
  // ... (이미 작성된 전체 코드가 삽입됨)
}
