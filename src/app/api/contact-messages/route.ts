import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { contactMessages } from '@/db/schema';
import { eq, like, or, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single record fetch
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }

      const record = await db.select()
        .from(contactMessages)
        .where(eq(contactMessages.id, parseInt(id)))
        .limit(1);

      if (record.length === 0) {
        return NextResponse.json({ 
          error: 'Contact message not found' 
        }, { status: 404 });
      }

      return NextResponse.json(record[0]);
    }

    // List with pagination and search
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');

    let query = db.select().from(contactMessages);

    if (search) {
      query = query.where(
        or(
          like(contactMessages.name, `%${search}%`),
          like(contactMessages.email, `%${search}%`),
          like(contactMessages.message, `%${search}%`)
        )
      );
    }

    const results = await query
      .orderBy(desc(contactMessages.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results);

  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || typeof name !== 'string') {
      return NextResponse.json({ 
        error: "Name is required and must be a string",
        code: "MISSING_NAME" 
      }, { status: 400 });
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ 
        error: "Email is required and must be a string",
        code: "MISSING_EMAIL" 
      }, { status: 400 });
    }

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ 
        error: "Message is required and must be a string",
        code: "MISSING_MESSAGE" 
      }, { status: 400 });
    }

    // Sanitize inputs
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedMessage = message.trim();

    // Field validation
    if (trimmedName.length < 2) {
      return NextResponse.json({ 
        error: "Name must be at least 2 characters long",
        code: "INVALID_NAME_LENGTH" 
      }, { status: 400 });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json({ 
        error: "Please provide a valid email address",
        code: "INVALID_EMAIL_FORMAT" 
      }, { status: 400 });
    }

    if (trimmedMessage.length < 10) {
      return NextResponse.json({ 
        error: "Message must be at least 10 characters long",
        code: "INVALID_MESSAGE_LENGTH" 
      }, { status: 400 });
    }

    // Create new contact message
    const newRecord = await db.insert(contactMessages)
      .values({
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
        createdAt: new Date().toISOString()
      })
      .returning();

    return NextResponse.json(newRecord[0], { status: 201 });

  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    // Check if record exists
    const existingRecord = await db.select()
      .from(contactMessages)
      .where(eq(contactMessages.id, parseInt(id)))
      .limit(1);

    if (existingRecord.length === 0) {
      return NextResponse.json({ 
        error: 'Contact message not found' 
      }, { status: 404 });
    }

    const body = await request.json();
    const { name, email, message } = body;
    const updates: any = {};

    // Validate and sanitize fields if provided
    if (name !== undefined) {
      if (typeof name !== 'string') {
        return NextResponse.json({ 
          error: "Name must be a string",
          code: "INVALID_NAME_TYPE" 
        }, { status: 400 });
      }
      const trimmedName = name.trim();
      if (trimmedName.length < 2) {
        return NextResponse.json({ 
          error: "Name must be at least 2 characters long",
          code: "INVALID_NAME_LENGTH" 
        }, { status: 400 });
      }
      updates.name = trimmedName;
    }

    if (email !== undefined) {
      if (typeof email !== 'string') {
        return NextResponse.json({ 
          error: "Email must be a string",
          code: "INVALID_EMAIL_TYPE" 
        }, { status: 400 });
      }
      const trimmedEmail = email.trim().toLowerCase();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedEmail)) {
        return NextResponse.json({ 
          error: "Please provide a valid email address",
          code: "INVALID_EMAIL_FORMAT" 
        }, { status: 400 });
      }
      updates.email = trimmedEmail;
    }

    if (message !== undefined) {
      if (typeof message !== 'string') {
        return NextResponse.json({ 
          error: "Message must be a string",
          code: "INVALID_MESSAGE_TYPE" 
        }, { status: 400 });
      }
      const trimmedMessage = message.trim();
      if (trimmedMessage.length < 10) {
        return NextResponse.json({ 
          error: "Message must be at least 10 characters long",
          code: "INVALID_MESSAGE_LENGTH" 
        }, { status: 400 });
      }
      updates.message = trimmedMessage;
    }

    // If no valid updates provided
    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ 
        error: "No valid fields provided for update",
        code: "NO_UPDATE_FIELDS" 
      }, { status: 400 });
    }

    // Update record
    const updated = await db.update(contactMessages)
      .set(updates)
      .where(eq(contactMessages.id, parseInt(id)))
      .returning();

    return NextResponse.json(updated[0]);

  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    // Check if record exists
    const existingRecord = await db.select()
      .from(contactMessages)
      .where(eq(contactMessages.id, parseInt(id)))
      .limit(1);

    if (existingRecord.length === 0) {
      return NextResponse.json({ 
        error: 'Contact message not found' 
      }, { status: 404 });
    }

    // Delete record
    const deleted = await db.delete(contactMessages)
      .where(eq(contactMessages.id, parseInt(id)))
      .returning();

    return NextResponse.json({
      message: 'Contact message deleted successfully',
      deletedRecord: deleted[0]
    });

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + error 
    }, { status: 500 });
  }
}