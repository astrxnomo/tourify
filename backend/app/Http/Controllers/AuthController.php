<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|string|email|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => $data['password'],
            'role_id'  => 2,
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['user' => $user, 'token' => $token], 201);
    }

    public function login(Request $request): JsonResponse
    {
        $data = $request->validate([
            'email'    => 'required|string|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $data['email'])->first();

        if (! $user || ! Hash::check($data['password'], $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Las credenciales no son correctas.'],
            ]);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['user' => $user, 'token' => $token]);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Sesión cerrada correctamente.']);
    }

    public function me(Request $request): JsonResponse
    {
        return response()->json($request->user()->load('role'));
    }

    public function forgotPassword(Request $request): JsonResponse
    {
        $request->validate(['email' => 'required|email']);

        $user = User::where('email', $request->email)->first();

        // Always return success to avoid exposing which emails exist
        if ($user) {
            // In a real app you'd send an email with a reset link
            // For this project we just acknowledge the request
            $user->update(['remember_token' => Str::random(60)]);
        }

        return response()->json(['message' => 'Si el correo está registrado, recibirás instrucciones en breve.']);
    }
}
