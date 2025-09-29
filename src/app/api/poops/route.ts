import { NextRequest, NextResponse } from 'next/server'
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// GET /api/poops - Get all poop entries with optional filters
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const species = searchParams.get('species')
    const limit = searchParams.get('limit')
    const userId = searchParams.get('userId')

    // Mock data for now - replace with Prisma queries after migration
    const mockData = [
      {
        id: '1',
        userId: 'user1',
        petId: null,
        species: 'human',
        consistency: 4,
        size: 'medium',
        color: 'brown',
        smell: 5,
        effort: 5,
        satisfaction: 8,
        urgency: 6,
        length: 15.5,
        width: 3.2,
        weight: 200,
        location: 'Home',
        timestamp: new Date().toISOString(),
      },
      {
        id: '2',
        userId: 'user1',
        petId: 'pet1',
        species: 'dog',
        consistency: 3,
        size: 'medium',
        color: 'brown',
        smell: 6,
        effort: 4,
        satisfaction: 9,
        urgency: 7,
        length: 12.0,
        width: 2.8,
        weight: 150,
        location: 'Backyard',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
      },
    ]

    // Filter mock data if needed
    let filteredData = mockData
    if (species) {
      filteredData = filteredData.filter(entry => entry.species === species)
    }
    if (limit) {
      filteredData = filteredData.slice(0, parseInt(limit))
    }

    return NextResponse.json({
      success: true,
      data: filteredData,
      count: filteredData.length,
    })
  } catch (error) {
    console.error('Error fetching poop entries:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch poop entries' },
      { status: 500 }
    )
  }
}

// POST /api/poops - Create a new poop entry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ['userId', 'species', 'consistency']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Mock response - replace with Prisma create after migration
    const newEntry = {
      id: `${Date.now()}`,
      ...body,
      timestamp: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    /* After database migration, use this:
    const newEntry = await prisma.poopEntry.create({
      data: {
        userId: body.userId,
        petId: body.petId || null,
        species: body.species,
        consistency: body.consistency,
        size: body.size || 'medium',
        color: body.color || 'brown',
        smell: body.smell || 5,
        effort: body.effort || 5,
        satisfaction: body.satisfaction || 5,
        urgency: body.urgency || 5,
        length: body.length || null,
        width: body.width || null,
        weight: body.weight || null,
        location: body.location || null,
        mood: body.mood || null,
        blood: body.blood || false,
        mucus: body.mucus || false,
        undigested: body.undigested || false,
        pain: body.pain || false,
        wipeCount: body.wipeCount || null,
        cleanupTime: body.cleanupTime || null,
        notes: body.notes || null,
      },
    })
    */

    return NextResponse.json(
      {
        success: true,
        data: newEntry,
        message: 'Poop entry created successfully',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating poop entry:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create poop entry' },
      { status: 500 }
    )
  }
}

// PUT /api/poops - Update a poop entry
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...updateData } = body

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Missing entry ID' },
        { status: 400 }
      )
    }

    // Mock response - replace with Prisma update after migration
    const updatedEntry = {
      id,
      ...updateData,
      updatedAt: new Date().toISOString(),
    }

    /* After database migration, use this:
    const updatedEntry = await prisma.poopEntry.update({
      where: { id },
      data: updateData,
    })
    */

    return NextResponse.json({
      success: true,
      data: updatedEntry,
      message: 'Poop entry updated successfully',
    })
  } catch (error) {
    console.error('Error updating poop entry:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update poop entry' },
      { status: 500 }
    )
  }
}

// DELETE /api/poops - Delete a poop entry
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Missing entry ID' },
        { status: 400 }
      )
    }

    // Mock response - replace with Prisma delete after migration
    /* After database migration, use this:
    await prisma.poopEntry.delete({
      where: { id },
    })
    */

    return NextResponse.json({
      success: true,
      message: 'Poop entry deleted successfully',
    })
  } catch (error) {
    console.error('Error deleting poop entry:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete poop entry' },
      { status: 500 }
    )
  }
}
