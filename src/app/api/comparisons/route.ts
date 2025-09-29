import { NextRequest, NextResponse } from 'next/server'
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// GET /api/comparisons - Get comparison data between users/pets
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const subject1 = searchParams.get('subject1') || 'matthew'
    const subject2 = searchParams.get('subject2') || 'ozzie'
    const timeRange = searchParams.get('timeRange') || '7d'

    // Mock comparison data - replace with Prisma queries after migration
    const mockComparison = {
      subjects: {
        subject1: {
          id: 'user1',
          name: 'Matthew Klose',
          type: 'human',
          avatar: '👨',
        },
        subject2: {
          id: 'pet1',
          name: 'Ozzie Klose',
          type: 'dog',
          avatar: '🐕',
        },
      },
      metrics: {
        frequency: {
          subject1: 2.1,
          subject2: 3.6,
          winner: 'subject2',
          difference: 71.4,
        },
        consistency: {
          subject1: 4.2,
          subject2: 3.8,
          winner: 'subject1',
          difference: 10.5,
        },
        satisfaction: {
          subject1: 8.7,
          subject2: 9.2,
          winner: 'subject2',
          difference: 5.7,
        },
        healthScore: {
          subject1: 88,
          subject2: 94,
          winner: 'subject2',
          difference: 6.8,
        },
      },
      weeklyComparison: [
        { day: 'Mon', subject1: 2, subject2: 4 },
        { day: 'Tue', subject1: 3, subject2: 3 },
        { day: 'Wed', subject1: 1, subject2: 5 },
        { day: 'Thu', subject1: 2, subject2: 4 },
        { day: 'Fri', subject1: 3, subject2: 3 },
        { day: 'Sat', subject1: 2, subject2: 4 },
        { day: 'Sun', subject1: 3, subject2: 5 },
      ],
      performanceRadar: [
        { metric: 'Consistency', subject1: 85, subject2: 78 },
        { metric: 'Satisfaction', subject1: 90, subject2: 95 },
        { metric: 'Frequency', subject1: 70, subject2: 92 },
        { metric: 'Health', subject1: 88, subject2: 85 },
        { metric: 'Timing', subject1: 75, subject2: 80 },
        { metric: 'Effort', subject1: 82, subject2: 88 },
      ],
      consistencyDistribution: {
        subject1: [
          { type: 1, count: 5 },
          { type: 2, count: 12 },
          { type: 3, count: 25 },
          { type: 4, count: 35 },
          { type: 5, count: 15 },
          { type: 6, count: 6 },
          { type: 7, count: 2 },
        ],
        subject2: [
          { type: 1, count: 8 },
          { type: 2, count: 15 },
          { type: 3, count: 43 },
          { type: 4, count: 32 },
          { type: 5, count: 20 },
          { type: 6, count: 8 },
          { type: 7, count: 3 },
        ],
      },
      timeOfDay: [
        { hour: '6 AM', subject1: 15, subject2: 25 },
        { hour: '8 AM', subject1: 35, subject2: 30 },
        { hour: '10 AM', subject1: 20, subject2: 15 },
        { hour: '12 PM', subject1: 10, subject2: 10 },
        { hour: '2 PM', subject1: 5, subject2: 5 },
        { hour: '4 PM', subject1: 5, subject2: 5 },
        { hour: '6 PM', subject1: 10, subject2: 10 },
      ],
      insights: [
        {
          title: 'Frequency Champion',
          description: `${subject2} leads with 71% higher frequency. Dogs typically have higher frequency.`,
          winner: 'subject2',
        },
        {
          title: 'Consistency King',
          description: `${subject1} has 10% better consistency ratings. Human diet control shows benefits.`,
          winner: 'subject1',
        },
        {
          title: 'Morning Routine',
          description: 'Both peak between 6-10 AM. Early morning shows optimal digestive activity.',
          winner: 'tie',
        },
        {
          title: 'Overall Champion',
          description: `${subject2} wins overall with higher frequency, satisfaction, and health scores.`,
          winner: 'subject2',
        },
      ],
      overallWinner: 'subject2',
      totalEntries: {
        subject1: 147,
        subject2: 200,
      },
    }

    /* After database migration, use queries like:
    const comparison = await prisma.comparison.create({
      data: {
        subject1Id: subject1,
        subject2Id: subject2,
        timeRange,
        metrics: mockComparison.metrics,
        result: mockComparison,
      },
    })
    */

    return NextResponse.json({
      success: true,
      data: mockComparison,
      timeRange,
    })
  } catch (error) {
    console.error('Error fetching comparison:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch comparison' },
      { status: 500 }
    )
  }
}

// POST /api/comparisons - Create a saved comparison
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { subject1, subject2, timeRange, name } = body

    if (!subject1 || !subject2) {
      return NextResponse.json(
        { success: false, error: 'Missing required subjects' },
        { status: 400 }
      )
    }

    // Mock response - replace with Prisma create after migration
    const savedComparison = {
      id: `comparison_${Date.now()}`,
      subject1,
      subject2,
      timeRange: timeRange || '7d',
      name: name || `${subject1} vs ${subject2}`,
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json(
      {
        success: true,
        data: savedComparison,
        message: 'Comparison saved successfully',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving comparison:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save comparison' },
      { status: 500 }
    )
  }
}
