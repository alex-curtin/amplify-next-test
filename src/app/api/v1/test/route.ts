import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'hello from GET' });
}
export async function POST() {
  return NextResponse.json({ message: 'hello from POST' });
}
export async function PUT() {
  return NextResponse.json({ message: 'hello from PUT' });
}
export async function DELETE() {
  return NextResponse.json({ message: 'hello from DELETE' });
}
